import React from "react";
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import Placeholder from "../Images/ph.png";



export default function Home () {
  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="kavoon">Yvie DODEQ</h1>
                <p className="mont">Live. Love. Inspire</p>
                {/* <div className="heroButtonPair mont">
                    <button>Explore My World</button>
                    <button><a href="/shop" className="link">Shop YvieStyleIt</a></button>
                </div> */}
            </Container>
        </div>
        <div className="homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>Who Is Yvie?</h1>
                <p>Hi! I’m Yvie, a creator, innovator, and dreamer with a passion for expression. From styling unique fashion collections to engineering impactful projects, my life is a fusion of art, science, and heart. Through YvieDodeQ, I share my journey in hopes of inspiring yours. Let’s connect, create, and grow together."</p>
                <button>Learn More About Me</button>
            </Container>
        </div>
        <div className="passions">
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
        </div>
    </>
  );
};