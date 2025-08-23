import React, { useState, useEffect } from "react";
import { Col, Row, Modal, Button, Image } from "react-bootstrap";
import { client } from "../lib/Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost", order: "-sys.createdAt" })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

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
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{activePost?.fields.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {activePost?.fields.blogPostCover && (
            <Image
              src={activePost.fields.blogPostCover.fields.file.url}
              alt="cover"
              fluid
              className="m-2"
            />
          )}
          <div>
            {activePost?.fields.blogPostContent &&
              documentToReactComponents(activePost.fields.blogPostContent)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* POSTS LIST */}
      <h1 className="sectionHeader">Posts</h1>
      <div className="container section" id="blogs">
        <Row lg={4}>
          {posts.map((post, index) => {
            const plainText = documentToPlainTextString(
              post.fields.blogPostContent
            );
            const preview =
              plainText.length > 120
                ? plainText.substring(0, 120) + "..."
                : plainText;

            return (
              <Col key={index} className="mb-5">
                <div className="blog-post">
                  {post.fields.blogPostCover && (
                    <img
                      src={post.fields.blogPostCover.fields.file.url}
                      alt={post.fields.title}
                    />
                  )}
                  <h4>{post.fields.title}</h4>
                  <p>{preview}</p>
                  <Button
                    className="btn-custom"
                    onClick={() => handleReadMore(post)}
                  >
                    read more
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}
