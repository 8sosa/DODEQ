// import React from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Engineer.css'
// import { Col, Row, Container } from "react-bootstrap";
// import Placeholder from "../Images/ph.png";

// export default function Engineer () {

//   return (
//     <>
//         {/* <!-- Hero Section --> */}
//         <div class="homeHero">
//             <div class="container homeHeroContainer">
//             <h1 class="kavoon">Yvie is an Engineer?</h1>
//             <p class="mont">Explore my academic journey and professional work in engineering.</p>
//             </div>
//         </div>

//         {/* <!-- Professional Profile --> */}
//         <div className="homeAbout">
//             <Container className="homeAboutContainer altMont">
//                 <div class="container section d-flex flex-column align-items-center">
//                     <h2 className="sectTitle altMont">Professional Profile</h2>
//                     <Row className="profileRow" xl={4}>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Software Engineer</p>
//                                             <p className="mont">Access Bank</p>
//                                             <p className="mont">July 2024 - Present</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Full-Stack Developer</p>
//                                             <p className="mont">Freelance</p>
//                                             <p className="mont">2023 - Present</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Software Engineer</p>
//                                             <p className="mont">Access Bank</p>
//                                             <p className="mont">(July 2024 - Present)</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Software Engineer</p>
//                                             <p className="mont">Access Bank</p>
//                                             <p className="mont">July 2024 - Present</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Full-Stack Developer</p>
//                                             <p className="mont">Freelance</p>
//                                             <p className="mont">2023 - Present</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                         <Col className="p-3">
//                             <div class="flip-card1">
//                                 <div class="flip-card1-inner">
//                                     <div class="flip-card1-front">
//                                         <div className="profile">
//                                             <img src={Placeholder} alt="placeholder"/>
//                                             <p className="mont">Software Engineer</p>
//                                             <p className="mont">Access Bank</p>
//                                             <p className="mont">(July 2024 - Present)</p>
//                                         </div>
//                                     </div>
//                                     <div className="flip-card1-back mont">
//                                         <ul>
//                                             <li>Developing backend solutions for the anti-money laundering team.</li>
//                                             <li>Writing unit tests to ensure system reliability.</li>
//                                             <li>Working with .NET and C# for scalable financial applications.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </Col>
//                     </Row>
//                     <a class="cv-link" href="#path-to-your-cv.pdf" target="_blank">Download CV</a>
//                 </div>
//             </Container>
//         </div>

//         {/* <!-- Projects Gallery --> */}
//         <div class="container section d-flex flex-column align-items-center">
//             <h2 class="kavoon text-center mb-5">Project Gallery</h2>
//             <div class="projects">
//                 <Row xl={4} class="projects">
//                     <Col>
//                         <div class="project-card text-center mont">
//                             <img src={Placeholder} alt="EcoTrack Logo" className="project-image mb-3"/>
//                             <h3><i className="fas fa-leaf"></i> EcoTrack</h3>
//                             <p>A web app that helps users monitor and reduce their carbon footprint by tracking daily activities.</p>
//                         </div>             
//                     </Col>
//                     <Col>
//                         <div className="project-card text-center mont">
//                             <img src={Placeholder} alt="ByteMart Logo" className="project-image mb-3"/>
//                             <h3><i className="fas fa-store"></i> ByteMart</h3>
//                             <p>An online marketplace for digital products like e-books, templates, and software licenses.</p>
//                         </div>             
//                     </Col>
//                     <Col>
//                         <div className="project-card text-center mont">
//                             <img src={Placeholder} alt="CodeMentor Hub Logo" className="project-image mb-3"/>
//                             <h3><i className="fas fa-code"></i> CodeMentor Hub</h3>
//                             <p>A platform that connects aspiring developers with experienced mentors for guidance and project reviews.</p>
//                         </div>             
//                     </Col>
//                     <Col>
//                         <div className="project-card text-center mont">
//                             <img src={Placeholder} alt="FitSync Logo" className="project-image mb-3"/>
//                             <h3><i className="fas fa-dumbbell"></i> FitSync</h3>
//                             <p>A fitness tracking app that syncs workout plans, diet schedules, and progress reports in one place.</p>
//                         </div>             
//                     </Col>
//                 </Row>
//             </div>
//         </div>

//     </>
//   )}

import React from "react";
import './Engineer.css';
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../Images/home.jpg";      // your new hero image
import ph from "../Images/ph.png";            // placeholder/project thumbnails

export default function Engineer() {
  return (
    <>
      {/* Nav (optional) */}
      {/* <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">MAXY<span>Engineering</span></a>
          <ul className="nav-links">
            {["Home","About","Services","Projects","Contacts"].map(l => (
              <li key={l}><a href={"#"+l.toLowerCase()}>{l}</a></li>
            ))}
          </ul>
        </div>
      </nav> */}

      {/* Hero Slider */}
      <section id="home" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          {/* <button className="arrow left">{'\u2039'}</button> */}
          <div className="slide-text">
            <h1>I AM THE FUTURE</h1>
          </div>
          {/* <button className="arrow right">{'\u203A'}</button> */}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services band">
        <Container>
          <Row className="text-center">
            {[
              { icon: "fas fa-home", label: "Building" },
              { icon: "fas fa-project-diagram", label: "Infrastructures" },
              { icon: "fas fa-water", label: "Hydraulic works" },
            ].map(s => (
              <Col key={s.label}>
                <i className={s.icon + " service-icon"}></i>
                <p>{s.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About / Leaders */}
      <section id="about" className="about">
        <Container className="d-flex align-items-center">
          <div className="about-text">
            <h2>We are the leaders</h2>
            <p>At MAXY we strive to excel in every service we provide, adding value …</p>
          </div>
          <div className="about-stats">
            <h3>13</h3>
            <p>Years of experience in the industry</p>
          </div>
        </Container>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="projects">
        <Container>
          <h2 className="text-center">Project Gallery</h2>
          <div className="projects-grid">
            {[...Array(7)].map((_,i) => (
              <div className="proj-card" key={i}>
                <img src={ph} alt={`Project ${i}`} />
                {i===0 && <div className="overlay"><span>University of dreams</span></div>}
              </div>
            ))}
          </div>
          <div className="see-all">
            <a href="#projects">See all projects</a>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="stats-band band">
        <Container>
          <Row className="text-center">
            {[
              { num: "16", label: "Built and enhanced designs of housings and facilities" },
              { num: "7",  label: "Architect‑built housing estates" },
              { num: "423", label: "Highly qualified specialists" },
            ].map(s => (
              <Col key={s.num}>
                <h3>{s.num}</h3>
                <p>{s.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer / Contacts
      <footer id="contacts">
        <Container className="text-center">
          <p>28 Jackson Blvd Ste 1020 Chicago IL 60604‑2340<br/>Tel: 80023456789</p>
          <div className="socials">
            <a href="#" className="btn">Facebook</a>
            <a href="#" className="btn">Twitter</a>
            <a href="#" className="btn">LinkedIn</a>
          </div>
          <small>© 2016 · Privacy Policy</small>
        </Container>
      </footer> */}
    </>
  );
}
