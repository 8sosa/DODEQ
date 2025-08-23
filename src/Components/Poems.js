import React, { useEffect, useState } from "react";
import commentBox from "commentbox.io";
import { Col, Row, Modal, Button, Image, Spinner } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { client } from "../lib/Contentful";

export default function Poems() {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activePoem, setActivePoem] = useState(null);

  // Fetch poems from Contentful
  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await client.getEntries({ content_type: "poem" });
        setPoems(response.items);
      } catch (error) {
        console.error("Error fetching poems:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPoems();
  }, []);

  // Comments integration
  useEffect(() => {
    if (activePoem?.fields?.title) {
      const threadId = activePoem.fields.title.toLowerCase().replace(/\s+/g, "-");
      const removeCommentBox = commentBox("5769248198623232-proj", {
        defaultBoxId: threadId,
        pageId: threadId,
      });
      return () => removeCommentBox();
    }
  }, [activePoem]);

  const handleReadMore = (poem) => {
    setActivePoem(poem);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setActivePoem(null);
  };

  return (
    <>
      {/* Modal for full poem */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{activePoem?.fields?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {activePoem?.fields?.poemCover && (
            <Image
              src={activePoem.fields.poemCover.fields.file.url}
              alt={activePoem.fields.title}
              fluid
              className="mb-3"
            />
          )}
          <div>{documentToReactComponents(activePoem?.fields?.poemContent)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Poems section */}
      <h1 className="sectionHeader">Poems</h1>
      <div className="container section" id="blogs">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row lg={4}>
            {poems.map((poem, index) => {
                const plainText = documentToPlainTextString(poem.fields.poemContent);
                const preview =
                    plainText.length > 120 ? plainText.substring(0, 120) + "..." : plainText;

                return (
                    <Col key={index} className="mb-5">
                    <div className="blog-post">
                        {poem.fields.poemCover && (
                        <img
                            src={poem.fields.poemCover.fields.file.url}
                            alt={poem.fields.title}
                        />
                        )}
                        <h4>{poem.fields.title}</h4>
                        <p>{preview}</p>
                        <Button className="btn-custom" onClick={() => handleReadMore(poem)}>
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
