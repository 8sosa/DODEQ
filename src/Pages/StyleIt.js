import React from "react";
import './StyleIt.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import Placeholder from "../Images/ph.png";



export default function StyleIt () {
  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="kavoon">Fashion That Speaks, Style That Inspires.</h1>
                <p className="mont">Welcome to YvieStyleIt, where creativity meets individuality. Discover collections crafted to empower and inspire every step of your journey.</p>
                <div className="heroButtonPair mont">
                    <button><a href="/shop">Shop Now</a></button>
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
        <div className="passions">
            <Container className="passionsContainer altMont">
                <h1>Explore the Collections</h1>
                <Row className="mb-5 flex-column flex-md-row">
                    {/* Left Column */}
                    <Col md={4} className="d-flex flex-column gap-5 order-1 order-md-1">
                        <img src={Placeholder} alt="collection 1" className="p1x1"/>
                        <img src={Placeholder} alt="collection 1" className="p2x1"/>
                    </Col>

                    {/* Center Column (Moves to Bottom on Small Screens) */}
                    <Col md={4} className="d-flex flex-column gap-5 order-3 order-md-2">
                        <img src={Placeholder} alt="collection 1" className="p1x2"/>
                        <img src={Placeholder} alt="collection 1" className="p1x2"/>
                        <div className="collectionDetail altMont">
                        <h1>Yvie’s Muse</h1>
                        <span>FALL 2023</span>
                        </div>
                    </Col>

                    {/* Right Column */}
                    <Col md={4} className="d-flex flex-column gap-5 order-2 order-md-3">
                        <img src={Placeholder} alt="collection 1" className="p2x1"/>
                        <img src={Placeholder} alt="collection 1" className="p1x1"/>
                    </Col>
                </Row>

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