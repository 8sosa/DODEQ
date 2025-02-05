import React, {useEffect, useState} from "react";
import './StyleIt.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import Placeholder from "../Images/ph.png";
import Collections from "../Collection/collection.json"


export default function StyleIt () {
    const [loadedCollections, setLoadedCollections] = useState([]);

    useEffect(() => {
        // Preload images before rendering each collection
        const preloadImages = async () => {
            const promises = Collections.map((collection) => {
                return new Promise((resolve) => {
                    [
                        collection.p1x1, collection.p1x2,
                        collection.p2x1, collection.p2x2,
                        collection.p3x1, collection.p3x3
                    ].forEach((img) => {
                        const image = new Image();
                        image.src = require(`../Collection/${img}`);
                        image.onload = resolve;
                        image.onerror = resolve; // Resolve even if image fails
                    });
                });
            });
        
            await Promise.all(promises);
            setLoadedCollections(Collections);
        };
        

        preloadImages();
    }, []);

  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="kavoon">Yvie Style It</h1>
                <p className="mont">Insight into fashion</p>
                <div className="heroButtonPair mont">
                    <button><a href="/shop" className="link">Shop Now</a></button>
                    <button>Explore Collections</button>
                </div>
            </Container>
        </div>
        <div className="homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>My Fashion Philosophy</h1>
                <p>Fashion is more than what you wear—it’s how you express yourself. Through YvieStyleIt, I aim to celebrate individuality and creativity with bold, timeless designs. Whether you’re dressing up or dressing down, every piece tells a story: yours.</p>
            </Container>
        </div>
        {/* Collections Section */}
        <div className="passions">
                <Container className="passionsContainer altMont gap-5 d-flex flex-column">
                    <h1>Explore the Collections</h1>
                    {loadedCollections.length === 0 ? (
                        <div className="loading">Loading Collections...</div>
                    ) : (
                        loadedCollections.map((collection, index) => (
                            <Row className="Collection mb-5 flex-column flex-md-row" key={index}>
                                <Col md={4} className="d-flex flex-column align-items-center gap-5 order-3 order-md-1">
                                    <img src={require(`../Collection/${collection.p1x1}`)} alt={collection.p1x1Alt} className="p1x1" />
                                    <img src={require(`../Collection/${collection.p1x2}`)} alt={collection.p1x2Alt} className="p2x1" />
                                </Col>

                                <Col md={4} className="d-flex flex-column align-items-center gap-5 order-1 order-md-2">
                                    <div className="collectionDetail altMont">
                                        <h1>{collection.title}</h1>
                                        <span>{collection.season}</span>
                                    </div>
                                    <img src={require(`../Collection/${collection.p2x1}`)} alt={collection.p2x1Alt} className="p1x2" />
                                    <img src={require(`../Collection/${collection.p2x2}`)} alt={collection.p2x2Alt} className="p1x2" />
                                </Col>

                                <Col md={4} className="d-flex flex-column align-items-center gap-5 order-2 order-md-3">
                                    <img src={require(`../Collection/${collection.p3x1}`)} alt={collection.p3x1Alt} className="p2x1" />
                                    <img src={require(`../Collection/${collection.p3x3}`)} alt={collection.p3x3Alt} className="p1x1" />
                                </Col>
                            </Row>
                        ))
                    )}
                </Container>
            </div>
        <div className="homeEvents">
            <Container className="homeEventsContainer altMont">
                <h1>Upcoming Events</h1>
                <div class="team">
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                </div>
            </Container>
        </div>
    </>
  );
};