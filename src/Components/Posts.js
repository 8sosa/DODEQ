import React, { useState, useEffect } from "react";
import { Col, Row, Button, Modal, Image, Spinner } from "react-bootstrap";
import { client } from "../lib/Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1. Optimized Fetch with async/await and ordering
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blogPost",
          order: "-sys.createdAt",
        });
        setPosts(response.items);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // 2. Deep Linking (Hash handling)
  useEffect(() => {
    if (!loading && posts.length > 0) {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const targetPost = posts.find((post) => post.sys.id === hash);
        if (targetPost) {
          setActivePost(targetPost);
          setShowModal(true);
          // Optional: ensure the element is scrolled into view in the background
          setTimeout(() => {
             document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [loading, posts]);

  const handleReadMore = (post) => {
    setActivePost(post);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActivePost(null);
  };

  return (
    <>
      {/* MODAL */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{activePost?.fields.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {activePost?.fields.blogPostCover && (
            <Image
              src={activePost.fields.blogPostCover.fields.file.url}
              alt={activePost?.fields.title || "cover"}
              fluid
              className="mb-3 rounded"
            />
          )}
          <div className="post-content-container">
            {activePost?.fields.blogPostContent &&
              documentToReactComponents(activePost.fields.blogPostContent)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* POSTS LIST */}
      <h1 className="sectionHeader">Posts</h1>
      <div className="container section" id="blogs">
        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row lg={4} md={2} xs={1}>
            {posts.map((post) => {
              const plainText = documentToPlainTextString(post.fields.blogPostContent);
              const preview =
                plainText.length > 120
                  ? plainText.substring(0, 120) + "..."
                  : plainText;

              return (
                <Col key={post.sys.id} className="mb-5" id={post.sys.id}>
                  <div className="blog-post h-100 shadow-sm p-3 rounded">
                    {post.fields.blogPostCover && (
                      <img
                        src={post.fields.blogPostCover.fields.file.url}
                        alt={post.fields.title}
                        className="img-fluid mb-3 rounded"
                      />
                    )}
                    <h4>{post.fields.title}</h4>
                    <p className="text-muted small">{preview}</p>
                    <Button
                      className="btn-custom mt-auto"
                      onClick={() => handleReadMore(post)}
                    >
                      read more
                    </Button>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
}
