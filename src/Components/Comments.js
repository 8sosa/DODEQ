import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart, FaPaperPlane } from "react-icons/fa";
import { Form, Button, Spinner } from "react-bootstrap";
import { getSessionId } from "../utils/session";

const API_BASE = "http://localhost:4000/api";

export default function Comments({ contentId, contentType }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const sessionId = getSessionId();

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

  const toggleLike = async () => {
    try {
      if (liked) {
        await axios.delete(`${API_BASE}/likes/`, { data: { contentId, sessionId } });
        setLiked(false);
        setLikes((prev) => prev - 1);
      } else {
        await axios.post(`${API_BASE}/likes/`, { contentId, contentType, sessionId });
        setLiked(true);
        setLikes((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  return (
    <div className="comments-section mt-5 px-1">
      {/* Engagement Bar: Clean and proportional */}
      <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
        <button
          onClick={toggleLike}
          className="btn btn-link p-0 border-0 text-decoration-none d-flex align-items-center transition-all"
          style={{ transition: '0.2s ease' }}
        >
          {liked ? (
            <FaHeart className="text-danger fs-5" />
          ) : (
            <FaRegHeart className="text-secondary fs-5" />
          )}
          <span className="ms-2 fw-bold text-dark" style={{ fontSize: '0.9rem' }}>
            {likes} {likes === 1 ? 'like' : 'likes'}
          </span>
        </button>
        <span className="text-muted" style={{ fontSize: '0.85rem' }}>
          {comments.length} Comments
        </span>
      </div>

      {/* Refined Input Area */}
      <div className="mb-5 p-4 bg-light rounded-4 shadow-sm border">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name (Optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-0 bg-white mb-2 rounded-3 shadow-none p-2 ps-3"
              style={{ fontSize: '0.85rem', fontWeight: '600' }}
            />
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Share your thoughts..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
              className="border-0 bg-white rounded-3 shadow-none p-3"
              style={{ resize: 'none', fontSize: '0.95rem' }}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button 
              type="submit" 
              variant="primary" 
              disabled={!commentText.trim()}
              className="rounded-pill px-4 py-2 d-flex align-items-center gap-2 border-0 shadow-sm"
              style={{ fontSize: '0.85rem', fontWeight: '600' }}
            >
              Post <FaPaperPlane size={12} />
            </Button>
          </div>
        </Form>
      </div>

      {/* Comments List: Modern Thread Style */}
      <div className="comments-list">
        {loading ? (
          <div className="text-center py-4"><Spinner animation="border" size="sm" /></div>
        ) : comments.length > 0 ? (
          comments.map((c) => (
            <div key={c._id} className="mb-4 d-flex align-items-start">
              <div 
                className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0 shadow-sm"
                style={{ width: '36px', height: '36px', fontSize: '0.75rem' }}
              >
                {(c.name || "A").charAt(0).toUpperCase()}
              </div>
              <div className="flex-grow-1">
                <div className="bg-white border p-3 rounded-4 shadow-sm d-inline-block" style={{ maxWidth: '100%' }}>
                  <div className="fw-bold text-dark mb-1" style={{ fontSize: '0.8rem' }}>
                    {c.name || "Anonymous"}
                  </div>
                  <div className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {c.commentText}
                  </div>
                </div>
                <div className="text-muted mt-1 ms-2" style={{ fontSize: '0.65rem' }}>
                  {new Date(c.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 opacity-50">
            <p className="small mb-0 italic">No comments yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}