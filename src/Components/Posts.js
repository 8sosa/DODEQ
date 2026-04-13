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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        dialogClassName="modern-modal" // Custom class for external styling if needed
      >
        {/* Modern Header: Removed border, adjusted padding */}
        <Modal.Header closeButton className="border-0 pt-4 px-4 pb-2">
          <div className="w-100 mt-2">
            <Modal.Title className="fs-2 fw-bold text-dark lh-sm">
              {activePost?.fields.title}
            </Modal.Title>
            
            {/* Optional: Add Metadata (Date) */}
            {activePost?.sys?.createdAt && (
              <div className="text-muted small mt-2">
                Published {formatDate(activePost.sys.createdAt)}
              </div>
            )}
          </div>
        </Modal.Header>

        {/* Cover Image: Placed before Body so it sits flush with the edges */}
        {activePost?.fields.blogPostCover && (
          <div className="modal-hero-image px-1"> {/* Subtle padding keeps it neat */}
            <Image
              src={activePost.fields.blogPostCover.fields.file.url}
              alt={activePost?.fields.title || "cover"}
              fluid
              className="rounded shadow-sm"
              style={{ width: '100%', objectFit: 'cover', maxHeight: '400px' }}
            />
          </div>
        )}

        {/* Modern Body: Refined spacing and typography */}
        <Modal.Body
          className="px-4 pb-4 pt-3"
          style={{
            maxHeight: "65vh",
            overflowY: "auto",
            /* Custom scrollbar styling (works in webkit browsers) */
            scrollbarWidth: 'thin',
            scrollbarColor: '#ccc transparent'
          }}
        >
          {/* Use a wrapper class to apply CSS styles to the rich text output */}
          <div 
            className="post-content lh-base text-dark" 
            style={{ 
              fontSize: "1.1rem", 
              fontFamily: 'Georgia, serif', /* Good for readability */
              whiteSpace: "pre-wrap"
            }}
          >
            {activePost?.fields.blogPostContent &&
              documentToReactComponents(activePost.fields.blogPostContent)}
          </div>
        </Modal.Body>

        {/* Modern Footer: Clean and minimal */}
        <Modal.Footer className="border-0 px-4 pb-4 pt-2">
          <Button 
            variant="outline-secondary" 
            onClick={handleClose} 
            className="px-4 rounded-pill"
          >
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
