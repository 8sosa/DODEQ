import React, { useState } from "react";
import { Col, Row, Modal, Button, Image } from "react-bootstrap";
import PostData from "../Components/Posts.json"

export default function Posts () {
    const [showModal, setShowModal] = useState(false);
    const [activePost, setActivePost] = useState(null);

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
            <Modal show={showModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{activePost?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                    maxHeight: '60vh',
                    overflowY: 'auto',
                    whiteSpace: 'pre-wrap'
                    }}
                >
                                     {activePost?.cover && (
                        <Image
                            src={require(`../Images/poems/${activePost.cover}`)}
                            alt="cover"
                            fluid
                            className="m-2"
                        />
                    )}  
                    <p style={{ whiteSpace: 'pre-wrap' }}>{activePost?.content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <h1 className="sectionHeader">Posts</h1>
            {/* Posts Cards Section */}
            <div className="container section" id="blogs">
                <Row lg={4}>
                {PostData.posts.map((post, index) => (
                    <Col key={index} className="mb-5">
                    <div className="blog-post">
                        <img src={require(`../Images/poems/${post.cover}`)} alt="Every Superhero Ever" />
                        <h4>{post.title}</h4>
                        <p>{post.content.substring(0, 120)}...</p>
                        <Button className="btn-custom" onClick={() => handleReadMore(post)}>read more</Button>
                    </div>
                    </Col>
                ))}
                </Row>
            </div>
        </>
    )
}