import React from "react";
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import StyleIt from "../Collection/unfinished/1x2.jpg";



export default function Home () {
  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="kavoon">Yvie|DODEQ</h1>
                <p className="mont">Live. Love. Inspire</p>
                {/* <div className="heroButtonPair mont">
                    <button>Explore My World</button>
                    <button><a href="/shop" className="link">Shop YvieStyleIt</a></button>
                </div> */}
            </Container>
        </div>
        <div className="homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>Meet Yvie</h1>
                <p>My name is Yvonne Amaria Jose. I just discovered that it’s my purpose to inspire and that’s what I intend to do. Watch me grow and join in my little adventure as I navigate the world, discover more, challenge myself, and inspire with what I can do. Welcome here! Hope you have fun and you’re inspired.</p>
            </Container>
        </div>
        <div className="styleIt">
            <Container className="styleItContainer">
                <Row className="styleItContainerRow">
                    <Col className="styleItCol altMont">
                        <h1>YVIE STYLE IT</h1>
                        <p>Insight into FASHION</p>
                        <button><a href="/yvie-styleit" className="link">Shop Now</a></button>
                    </Col>
                    <Col className="d-flex justify-content-center"><img src={StyleIt} alt="Yvie X Venus shoot" className="styleItImg"/></Col>
                </Row>
            </Container>
        </div>
        {/* <div className="passions">
            <Container className="passionsContainer altMont">
                <h1>Discover My Passions</h1>
                <div class="team">
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                    <div class="team-item"><img src={Placeholder} alt='our selves'/></div>
                </div>
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
        </div> */}
    </>
  );
};