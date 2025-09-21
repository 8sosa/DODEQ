import React from "react";
import './Outreach.css';
import HeroBg from "../Images/heros/outreach.jpg";
import { HeroSection } from "../Components/Hero";
// import Ph from '../Images/ph.png';
import SU from '../Images/outreach/cc.png';
import SA from '../Images/outreach/gg.png';
import PP from '../Images/outreach/kk.WEBP';
import PO from '../Images/outreach/oo.WEBP';

export default function OutreachPage() {
  return (
    <>
      <HeroSection
        title="OUTREACH"
        description="Justice begins where inequality ends"
        backgroundImage={HeroBg}
      />

      <main className="pageWrapper">
        {/* SheUnitesAfrica */}
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
                <a href="https://violetcarefoundation.com"><button className="primaryBtn">Learn More</button></a>
                <a href="https://violetcarefoundation.com"><button className="primaryBtn">Donate Now</button></a>
              </div>
            </div>
            <div className="aboutImages">
              <img src={SU} alt="SheUnitesAfrica program" />
              <img src={SA} alt="Mentorship session" />
            </div>
          </div>

          {/* <div className="campSection">
            <h3 className="sectionTitle">Featured Programs</h3> 
            <div className="campaignCards">
              <div className="campaignCard">
                <img src={Ph} alt="Education" />
                <div className="campaignContent">
                  <h4>Education & Scholarships</h4>
                  <p>Supporting girls to unlock their full potential.</p>
                </div>
              </div>
              <div className="campaignCard">
                <img src={Ph} alt="Leadership" />
                <div className="campaignContent">
                  <h4>Leadership Development</h4>
                  <p>Equipping girls to become confident leaders.</p>
                </div>
              </div>
              <div className="campaignCard">
                <img src={Ph} alt="Economic empowerment" />
                <div className="campaignContent">
                  <h4>Economic Empowerment</h4>
                  <p>Building financial independence for women.</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="statsSection">
            <div>
              <h3>2015</h3>
              <p>Founded</p>
            </div>
            <div>
              <h3>12K+</h3>
              <p>Women & girls reached</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Volunteers & mentors</p>
            </div>
            <div>
              <h3>80+</h3>
              <p>Communities impacted</p>
            </div>
          </div>
        </section>

        {/* Purple Pact */}
        <section className="ngoSection">
          <div className="ngoDetails">
            <h2>Purple Pact</h2>
            <p className="ngoSubtitle">
              Breaking systemic barriers so girls can dream, decide, and thrive.
            </p>
          </div>
          <div className="aboutSection">
            <div className="aboutContent">
              <p>
                Founded on October 2, 2018, Purple Pact was created to challenge the systemic barriers that prevent women and girls from accessing opportunities and living meaningful lives.
              </p>
              <p>
                We recognized that women and girls often face unfair treatment in education, employment, and even in making personal decisions about their bodies and futures. At Purple Pact, we focus on empowering girls by providing them with the knowledge and resources to make informed decisions. Whether it’s through education, mentorship, or sexual health awareness, we are committed to helping them navigate and overcome the obstacles they face.
              </p>
              <div className="btnPair">
                <a href="https://www.purplepact.org"><button className="primaryBtn">Learn More</button></a>
                <a href="https://www.purplepact.org"><button className="primaryBtn">Donate Now</button></a>
              </div>
            </div>
            <div className="aboutImages">
              <img src={PP} alt="Purple Pact session" />
              <img src={PO} alt="Awareness workshop" />
            </div>
          </div>

          {/* <div className="campSection">
            <h3 className="sectionTitle">Featured Initiatives</h3>
            <div className="campaignCards">
              <div className="campaignCard">
                <img src={Ph} alt="Mentorship" />
                <div className="campaignContent">
                  <h4>Mentorship Circles</h4>
                  <p>Connecting girls to mentors and role models.</p>
                </div>
              </div>
              <div className="campaignCard">
                <img src={Ph} alt="Sexual health awareness" />
                <div className="campaignContent">
                  <h4>Health Awareness</h4>
                  <p>Workshops on sexual health and rights.</p>
                </div>
              </div>
              <div className="campaignCard">
                <img src={Ph} alt="Leadership" />
                <div className="campaignContent">
                  <h4>Leadership Bootcamps</h4>
                  <p>Empowering girls to become changemakers.</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="statsSection">
            <div>
              <h3>2018</h3>
              <p>Founded</p>
            </div>
            <div>
              <h3>8K+</h3>
              <p>Girls supported</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Volunteers & partners</p>
            </div>
            <div>
              <h3>60+</h3>
              <p>Communities reached</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
