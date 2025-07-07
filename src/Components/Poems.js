import React, { useEffect, useState } from "react";
import commentBox from 'commentbox.io';
import { Col, Row, Modal, Button, Image } from "react-bootstrap";
import PoemData from "./Posts.json"
// import './Writeit.css';

export default function Poems () {
    const [showModal, setShowModal] = useState(false);
    const [activePoem, setActivePoem] = useState(null);

    const handleReadMore = (poem) => {
    setActivePoem(poem);
    setShowModal(true);
    };

    const handleClose = () => {
    setShowModal(false);
    setActivePoem(null);
    };

    useEffect(() => {
        if (activePoem?.title) {
          const threadId = activePoem.title.toLowerCase().replace(/\s+/g, '-');
    
          const removeCommentBox = commentBox('5769248198623232-proj', {
            defaultBoxId: threadId,
            pageId: threadId,
          });
    
          return () => removeCommentBox();
        }
      }, [activePoem]);

    return (
        <>
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{activePoem?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                    maxHeight: '60vh',
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap'
                    }}
                >                    {activePoem?.cover && (
                        <Image
                            src={require(`../Images/poems/${activePoem.cover}`)}
                            alt="cover"
                            fluid
                        />
                    )}                      
                <p style={{ whiteSpace: 'pre-wrap' }}>{activePoem?.content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <h1 className="sectionHeader">Poems</h1>
            {/* poems Cards Section */}
            <div className="container section" id="blogs">
                <Row lg={4}>
                    {PoemData.poems.map((poem, index) => (
                    <Col key={index} className="mb-5">
                        <div className="blog-post">
                        <img src={require(`../Images/poems/${poem.cover}`)} alt="Every Superhero Ever" />
                        <h4>{poem.title}</h4>
                        <p>{poem.content.substring(0, 120)}...</p>
                        <Button className="btn-custom" onClick={() => handleReadMore(poem)}>
                            read more
                        </Button>
                        </div>
                    </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}