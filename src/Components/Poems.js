import React, { useEffect, useState } from "react";
// import commentBox from "commentbox.io";
import Comments from "./Comments";
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
        // console.log(response.items);
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
  // useEffect(() => {
  //   if (activePoem?.fields?.title) {
  //     const threadId = activePoem.fields.title.toLowerCase().replace(/\s+/g, "-");
  //     const removeCommentBox = commentBox("5769248198623232-proj", {
  //       defaultBoxId: threadId,
  //       pageId: threadId,
  //     });
  //     return () => removeCommentBox();
  //   }
  // }, [activePoem]);
  useEffect(() => {
    if (!loading && poems.length > 0) {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const targetPoem = poems.find((poem) => poem.sys.id === hash);
        if (targetPoem) {
          setActivePoem(targetPoem);
          setShowModal(true);
          // optional: scroll into view
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [loading, poems]);
  

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
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        size="lg" 
        centered
        dialogClassName="modern-modal"
      >
        {/* Header with improved spacing and typography */}
        <Modal.Header closeButton className="border-0 pt-4 px-4 pb-2">
          <div className="w-100 mt-2">
            <Modal.Title className="fs-2 fw-bold text-dark lh-sm">
              {activePoem?.fields?.title}
            </Modal.Title>
            {activePoem?.sys?.createdAt && (
              <div className="text-muted small mt-2">
                {new Date(activePoem.sys.createdAt).toLocaleDateString(undefined, {
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            )}
          </div>
        </Modal.Header>

        {/* Hero Image flush with modal edges */}
        {activePoem?.fields?.poemCover && (
          <div className="px-1">
            <Image
              src={activePoem.fields.poemCover.fields.file.url}
              alt={activePoem.fields.title}
              fluid
              className="rounded shadow-sm"
              style={{ width: '100%', objectFit: 'cover', maxHeight: '350px' }}
            />
          </div>
        )}

        <Modal.Body
          className="px-4 pb-4 pt-3"
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            scrollbarWidth: 'thin',
            scrollbarColor: '#ccc transparent'
          }}
        >
          {/* Poem Content with specialized literary styling */}
          <div 
            className="poem-content-container mb-5"
            style={{ 
              fontSize: "1.15rem", 
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              color: "#2d3748"
            }}
          >
            {documentToReactComponents(activePoem?.fields?.poemContent)}
          </div>

          {/* Comments Section */}
          <hr className="my-4 opacity-25" />
          <div className="comments-wrapper">
            <h5 className="fw-bold mb-3">Discussion</h5>
            <Comments contentId={activePoem?.sys.id} contentType="poem" />
          </div>
        </Modal.Body>

        <Modal.Footer className="border-0 px-4 pb-4">
          <Button 
            variant="outline-secondary" 
            onClick={handleClose}
            className="rounded-pill px-4"
          >
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
                    <Col key={index} className="mb-5" id={poem.sys.id}>
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
