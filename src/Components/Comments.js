import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { getSessionId } from "../utils/session";

const API_BASE = "http://localhost:4000/api"; // change to deployed backend URL

export default function Comments({ contentId, contentType }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const sessionId = getSessionId(); // replace with real session/user id

  // Fetch comments + likes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [commentsRes, likesRes] = await Promise.all([
          axios.get(`${API_BASE}/comments/${contentId}`),
          axios.get(`${API_BASE}/likes/${contentId}`),
        ]);
        setComments(commentsRes.data);
        setLikes(likesRes.data.likes);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [contentId]);

  // Submit new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const res = await axios.post(`${API_BASE}/comments`, {
        contentId,
        contentType,
        name: name || "Anonymous",
        commentText,
      });

      setComments([res.data, ...comments]);
      setCommentText("");
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  // Toggle like for post
  const toggleLike = async () => {
    try {
      if (liked) {
        await axios.delete(`${API_BASE}/likes/`, {
          data: { contentId, sessionId },
        });
        setLiked(false);
        setLikes((prev) => prev - 1);
      } else {
        await axios.post(`${API_BASE}/likes/`, {
          contentId,
          contentType,
          sessionId,
        });
        setLiked(true);
        setLikes((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Like Button for Post */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={toggleLike}
          className="flex items-center space-x-2 text-red-500 hover:scale-110 transition-transform"
        >
          {liked ? <FaHeart className="text-red-600 text-xl" /> : <FaRegHeart className="text-xl" />}
          <span className="text-sm text-gray-700">{likes}</span>
        </button>
      </div>

      {/* Comment Form */}
        <h3 className="text-lg font-semibold">Comments</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 bg-transparent text-sm placeholder-gray-400 focus:outline-none"
        />
        <textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="flex-1 bg-transparent resize-none text-sm placeholder-gray-400 focus:outline-none"
          rows={1}
        />
        <button
          type="submit"
          disabled={!commentText.trim()}
          className={`text-blue-500 text-sm font-semibold ${
            !commentText.trim() ? "opacity-50 cursor-default" : "hover:text-blue-600"
          }`}
        >
          Post
        </button>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-gray-500">Loading comments...</p>
      ) : comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c._id} className="text-sm">
            <span className="font-semibold mr-2">{c.name || "Anonymous"}</span>
            <span>{c.commentText}</span>
            <div className="text-xs text-gray-400 mt-1">{new Date(c.createdAt).toLocaleString()}</div>
          </li>          
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No comments yet. Be the first!</p>
      )}
    </div>
  );
}
