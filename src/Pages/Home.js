import React from "react";
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
// import Eng from "../Components/Eng";
import HomeCarousel from "../Components/HomeCarousel";
import Posts from "../Components/Posts";

import { BookCarousel } from "../Components/Living/BookCarousel";
import SU from '../Images/outreach/cc.png';
import SA from '../Images/outreach/gg.png';

export default function Home () {
  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer gap-5">
                <h1 className="aladin">Yvie|DODEQ</h1>
                <p className="baka">LIVE. WORK. INSPIRE</p>
            </Container>
        </div>
        <div className="homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>Meet Yvie</h1>
                <p>My name is Yvonne Amaria Jose. I just discovered that it’s my purpose to inspire and that’s what I intend to do. Watch me grow and join in my little adventure as I navigate the world, discover more, challenge myself, and inspire with what I can do. Welcome here! Hope you have fun and you’re inspired.</p>
            </Container>
        </div>
        <div className="homeEvents">
            <h1 className="pb-5">YVIE STYLE IT</h1>
            <HomeCarousel />
        </div>
        <div className="homeEvents">
            <h1>YVIE WRITE IT</h1>
            <Posts />
            <a href="/yvie-write-it"><h4 className="mont">View More...</h4></a>
        </div>
        {/* <div className="homeEvents">
            <Eng />
        </div> */}
        <section className="ngoSection">
          <div className="ngoDetails">
            <h2>SheUnitesAfrica</h2>
            <p className="ngoSubtitle">
              Empowering girls and women across Africa through education, mentorship, health awareness, and economic opportunities.
            </p>
          </div>
          <div className="aboutSection">
            <div className="aboutContent">
              <h3>
              Violet Care Foundation for Women and Nature, Powered by SheUnitesAfrica
              </h3>
              <p>
                Originally founded as SheUnitesAfrica (SUA) in 2020 by Miss Anastacia Amarachi Nickson and Miss Chidimma Frances Okoye, our organization was established with a deep commitment to inspiring and empowering females to contribute to societal transformation and positive change. Our mission remains unwavering: to create a world where women and girls have equal opportunities to thrive.
              </p>
              <p>Through careful research and engagement with vulnerable communities, we recognize that women and girls experience the scourge of poverty in ways that limit their education, financial security, and overall well-being. Our initiatives are designed to bridge this gap, ensuring that females can access the same opportunities as men and boys.</p>
              <div className="btnPair">
                <button className="primaryBtn">Learn More</button>
                <button className="primaryBtn">Donate Now</button>
              </div>
            </div>
            <div className="aboutImages">
              <img src={SU} alt="SheUnitesAfrica program" />
              <img src={SA} alt="Mentorship session" />
            </div>
          </div>
        </section>
        <div className="homeEvents">
            <h1>YVIE EVENTS</h1>
            <div id="event" className="event-item fade-in-up p-5">
                <div className="event-date">
                    <div className="month">JUN</div>
                    <div className="day">23</div>
                </div>
                <div className="event-details">
                    <img src={SU} alt="Title of the Risen Event" />
                    <div>
                    <h3>Title of the Risen Event</h3>
                    <p>1015 California Ave, Los Angeles CA<br />7:00 pm — 8:00 pm</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href={`/events/risen-event`}>View Event Details →</a>
                    </div>
                </div>
            </div>
        </div>
        <BookCarousel />
    </>
  );
};