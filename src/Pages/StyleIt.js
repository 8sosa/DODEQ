import React from "react";
import './StyleIt.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "../Components/Carousel";
import Collections from "../Collection/collection.json"


export default function StyleIt () {

  return (
    <>
        <div className="styleItHero homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="logoFont">Yvie Style it</h1>
                <p className="styleItHeroText mont">Fashion is my super power, I live, breathe, and Inspire fashion. I design, sew, style, and recreate my vision. Explore as you join in my Journey to redefine FASHION.</p>
                <p className="styleItHeroText mont">Yvie ~</p>
                <div className="heroButtonPair mont">
                    <button><a href="/shop" className="link">Shop Now</a></button>
                    <button><a href="#Collections" className="link">Explore Collections</a></button>
                </div>
            </Container>
        </div>
        <div className="styleItTabs">
            <Carousel />
        </div>
        <div className="styleItAbout homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>Create Your Own Style</h1>
                <p>Designing is subjective. You can design anywhere, anytime, out of anything. I love to create, I love sewing, and I don’t always have the tools and venue I need to bring out my vision. I’d sit on the floor of my room, do the illustration art to guide me, get pieces of materials I have, improvise anything I don’t have, and create whatever I’m inspired to create. Whenever I can’t sew at home, I go to a neighboring tailor and ask to use their machine, and whenever I don’t understand the process to bring out my vision, I go on YouTube for help and further tutorials. Nothing stops my process.</p>
                <p>Be inspired, don’t let anything stop you from creating. You can create your own style anywhere, no matter the hindrance. Remember, designing is subjective, and creativity bears no limits.</p>
            </Container>
        </div>
        {/* Collections Section */}

        <div className="passions">
            <Container className="passionsContainer altMont gap-5 d-flex flex-column" id="Collections">
                <h1>Explore the Collections</h1>
                {
                    Collections.map((collection, index) => (
                        <Row className="Collection mb-5" key={index}>
                            <div className="collectionDetail altMont mb-5">
                                <h1>{collection.title}</h1>
                                {/* <span>{collection.season}</span> */}
                            </div>
                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p1x1}`)} alt={collection.p1x1Alt} className="p1x1" />
                            </Col>
                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p1x2}`)} alt={collection.p1x2Alt} className="p2x1" />
                            </Col>
                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p2x1}`)} alt={collection.p2x1Alt} className="p1x2" />
                            </Col>
                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p2x2}`)} alt={collection.p2x2Alt} className="p1x2" />
                            </Col>
                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p3x1}`)} alt={collection.p3x1Alt} className="p2x1" />
                            </Col>

                            <Col xs={5} sm={5} md={4} lg={2} className="d-flex flex-column align-items-center">
                                <img src={require(`../Collection/${collection.p3x3}`)} alt={collection.p3x3Alt} className="p1x1" />
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
        {/* <div className="homeEvents">
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