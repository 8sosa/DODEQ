import React from "react";
import './Engineer.css';
import { Container, Row, Col } from "react-bootstrap";
import ph from "../Images/yvie.jpg";
import { FaLinkedinIn } from "react-icons/fa6";

function importAllImages(r) {
  return r.keys().map(r);
}

const images = importAllImages(
  require.context('../Images/eng', false, /\.(png|jpe?g|webp)$/)
);

export default function Engineer() {

  return (
    <>
      <section className="resume-wrapper">
        <Container className="resume-content">
          {/* Header */}
          <header className="resume-header">
            <div className="resume-name">
              <h1>Yvonne Amaria</h1>
              <p>PhD Student | Researcher | Engineer</p>
            </div>
          </header>

          {/* Top Section */}
          <section className="resume-top">
            <img src={ph} alt="Yvonne Amaria O." className="resume-photo" />
            <div className="resume-summary">
              <h1>Yvonne Amaria O.</h1>
              <h2>PhD Student, Materials Science & Engineering</h2>
              <p>
                Inquisitive and determined student with a passion for building and creating innovative solutions to complex technological problems and a career goal in research and practical technology. With a push for societal impact, I founded a non-profit that has prompted various collaborations in volunteering activities and activism with a major goal to inspire as I grow within my diverse interests. I seek to learn, educate, have fun, and use technology to create impact on a global scale as I bridge the gap toward access to dream-fulfilling resources within my community.
              </p>
            </div>
          </section>

          {/* Main Details */}
          <section className="resume-details">
            <div className="left-column">
              <h3>Education</h3>
              <p><strong>University of Michigan</strong><br />PhD in Materials Science and Engineering<br /><em>Expected May 2029</em></p>
              <p><strong>Huston-Tillotson University</strong><br />BSc in Computer Science, Mathematics, Applied Engineering<br /><em>Summa Cum Laude, May 2024</em></p>
              <p><strong>University of Amsterdam</strong><br />MOLSIM Certificate in Molecular Simulation<br /><em>Jan 2025</em></p>

              <h3>Skills</h3>
              <ul className="skillsList">
                <li>Python, C++, Java, JavaScript, HTML/CSS, React, SQL</li>
                <li>Machine Learning (PyTorch, Julia, Weka)</li>
                <li>Nanomanufacturing & Fabrication (CVD Growth, Device Characterization)</li>
                <li>Human-Robot Interaction & Robotics</li>
                <li>Software & Systems Development</li>
              </ul>
            </div>

            <div className="right-column">
              <h3>Experience</h3>
              <p><strong>GSRA, Glotzer Group – University of Michigan</strong><br />2024–Present<br />Researching inverse design of patchy nanoparticles, software development for simulations.</p>

              <p><strong>Research Scholar – MRC UT Austin</strong><br />2023–2024<br />Worked on nanomaterials growth, laser measurement, and device fabrication.</p>

              <p><strong>Research Intern – Stanford CS LINXS</strong><br />Summer 2023<br />Bimanual manipulation systems for human-interactive robots.</p>

              <p><strong>Intern – NASA ULI, Aerospace</strong><br />2022–2023<br />Simulated hypersonic vehicle trajectories and sensor networks.</p>

              <p><strong>Research Scholar - UW CS NEXT</strong><br />Spring 2023<br />Researched ECG signal processing at UW Reality Lab, using ML models (SVM, Random Forest, CNN) to detect heart attacks.</p>
             
            </div>
          </section>
        </Container>
      </section>

      <section className="resume-layout">
        <Container className="resume-columns">
          <header className="resume-header">
            <div className="resume-name">
              <h1>Yvonne Amaria O.</h1>
            </div>
          </header>

          <Row>
            <Col>
              <h3>Career History</h3>
            </Col>
            <Col>
              <div className="career">
                <p><strong>Summer Intern – Sovos Compliance (Quality Assurance Engineering)</strong><br />
                <em>Jun – Aug 2023</em><br />
                Automated UI smoke tests for the customer site using Python, Robot Framework, and Cypress.</p>

                <p><strong>UX Researcher – UpLevyl (User Experience and Engagement)</strong><br />
                <em>May – Jul 2023</em><br />
                Conducted engagement research for a women-focused app, using the Hook model to optimize user retention.</p>

                <p><strong>Summer Intern – NVIDIA Ignite (Hardware Infrastructure)</strong><br />
                <em>May – Aug 2022</em><br />
                Developed “Web Batch Status” tool using Python FastAPI, Redis, and React to enhance chip test transparency.</p>

                <p><strong>Tech Developer Intern – SEO Technology Track</strong><br />
                <em>May – Aug 2022</em><br />
                Built full-stack web applications and participated in 300+ hours of technical training on software engineering.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Education</h3>
            </Col>
            <Col>
              <div className="education">
                <p><strong>University of Michigan</strong><br />
                <em>PhD in Materials Science and Engineering, Expected May 2029</em><br /></p>

                <p><strong>University of Amsterdam</strong><br />
                <em>MOLSIM '25 Certificate, Jan 2025</em><br />
                Participated in the Molecular Simulation Workshop. Focus: Molecular Dynamics, Monte Carlo Simulation, Machine Learning.</p>

                <p><strong>Huston-Tillotson University</strong><br />
                <em>BSc in Computer Science, Applied Engineering, and Mathematics, Summa Cum Laude, May 2024</em><br /></p>

                <p><strong>The University of Texas at Austin</strong><br />
                <em>Undergraduate/Graduate Courses in Electrical & Computer Engineering, 2024</em><br />
                Completed courses in nanotechnology concentration: ECE 339, 347, 379, 440, and 460.</p>

                <p><strong>Oberlin College (Pioneer Academics Program)</strong><br />
                <em>College Credit in Research, 2020</em><br />
                Earned 2 college credits as part of Pioneer Academics program in research methodology.</p>

                <p><strong>Pioneer Academics</strong><br />
                <em>Student Research Scholar, Art History, 2020</em><br />
                Conducted independent research as a high school student; awarded full scholarship.</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Awards</h3>
            </Col>
            <Col>
              <div className="awards">
                <ul className="skillsList">
                  <li><strong>COMPASS Junior Scientist Board Research Challenge</strong> – Awarded for graph theory research on Capillary Bond Networks.</li>
                  <li><strong>Top-Ranking Graduate in Computer Science and Mathematics</strong> – Highest academic standing in both departments at Huston-Tillotson.</li>
                  <li><strong>W.E.B. DuBois Honors Program</strong> – Full merit-based tuition scholarship (4 years).</li>
                  <li><strong>Top-Ranking Junior in Computer Science</strong> – Recognized for academic excellence as a junior.</li>
                  <li><strong>Honor Roll and Dean's List (2020–2024)</strong> – Maintained high GPA every year.</li>
                  <li><strong>Stanford CS LINXS Distinguished Research Award</strong> – Awarded for outstanding robotics research contributions.</li>
                  <li><strong>Applied Materials Momentum Fund (2024)</strong> – For academic resilience and research alignment.</li>
                  <li><strong>Generation Google Scholarship (2023)</strong> – For excellence in technology, leadership, and academics.</li>
                  <li><strong>Last Mile Foundation Grant (2023)</strong> – For persistence and academic merit in Computer Science.</li>
                  <li><strong>Winner – Career Pathway Initiative (C4) Start-Up Challenge</strong> – Recognized for sustainable water purification tech startup idea.</li>
                  <li><strong>1st Runner-Up – HBCU Battle of the Brain (2022)</strong> – Earned $20,000 prize among 35 HBCUs in NFL-sponsored competition.</li>
                  <li><strong>2nd Runner-Up – Doritos Case Competition (2023)</strong> – Recognized for innovation in the Doritos Solid Black campaign.</li>
                  <li><strong>BKX Scientific Honors Society</strong> – Inducted into the first African American STEM honors society.</li>
                  <li><strong>Golden Key International Honour Society</strong> – Membership awarded to top 15% of academic achievers.</li>
                  <li><strong>Pioneer Academics Research Scholar (2020)</strong> – Full scholarship recipient for college-level research as a high school student.</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Skills & Competencies</h3>
            </Col>
            <Col>
              <div className="skills">
                <ul className="skillsList">
                  <li><strong>Programming Languages:</strong> Python, C++, Java, JavaScript, HTML, CSS, React, MySQL, MATLAB, Go, Swift</li>
                  <li><strong>Machine Learning & Deep Learning:</strong> Julia, PyTorch, Weka</li>
                  <li><strong>Design & Innovation:</strong> Figma, Architectural Modeling, Business Modeling (Hackathons)</li>
                  <li><strong>Fabrication & Nanomanufacturing:</strong> CVD Growth, Laser Measurement, Device Characterization, Clean Room Etiquette</li>
                  <li><strong>Professional Skills:</strong> Executive Management, Outreach Strategy, Human Relations, DEI Advocacy, Scientific Communication</li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Volunteer & Leadership Experience</h3>
            </Col>
            <Col>
              <div>
                <ul className="volunteer">
                  <li><strong>Pioneer Academics Alumni Advisory Board (2021–Present)</strong><br />
                    Advise and represent alumni in college and research panels; mentor high school research students across all cohorts since 2021.
                  </li>

                  <li><strong>Vice President – MSE Outreach, University of Michigan (2024–Present)</strong><br />
                    Create STEM exposure opportunities for K–12 students, develop educational materials and demos, liaise with schools, and contribute to website/publicity development.
                  </li>

                  <li><strong>President – HT Women in Tech (2023–2024)</strong><br />
                    Promoted from Vice President (2020–2023); led strategic outreach and collaboration across campus and community, launched the Tech Exposure program for K–12 engagement, and implemented career development initiatives for members.
                  </li>

                  <li><strong>Vice President – HT Women in Tech (2020–2023)</strong><br />
                    Collaborated with the executive board to host tech-focused events and community engagement activities that empowered students at all stages of their tech journeys.
                  </li>

                  <li><strong>Outreach & Engagement Chair – HT NSBE Chapter (2021–2024)</strong><br />
                    Recruited new members, led event planning, and partnered with like-minded organizations such as HT Women in Tech and NSBE Austin Professionals to advance diversity in engineering.
                  </li>

                  <li><strong>Vice President – Apple Coding Club (2023–2024)</strong><br />
                    Oversaw creative coding initiatives and outreach activities; coordinated summer programs and organized tech fairs for over 300 pre-college students, showcasing club projects.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Teaching & Mentorship Experience</h3>
            </Col>
            <Col>
              <div >
                <ul className="teaching">
                  <li><strong>AVELA – Engineering Instructor (2023–Present)</strong><br />
                    Lead instructor for Python programming with middle and high school students (FAST NGLU), curriculum designer for quantum computing classes taught to professionals, and mentor within AVELA's academic pipeline.
                  </li>

                  <li><strong>Vice President – MSE Outreach, University of Michigan (2024–Present)</strong><br />
                    Coordinating K–12 outreach initiatives across Michigan, with focus on Detroit; developing materials science demos and managing website/publicity development.
                  </li>

                  <li><strong>Peer Learning Coach – Center for Academic Excellence (2021–2024)</strong><br />
                    Tutored in Math, Physics, CS, and writing; led midterm/final prep sessions; supported adult learners and academic probation students; helped organize enrichment events.
                  </li>

                  <li><strong>Academy 4 – Mentor (2021–2024)</strong><br />
                    Guided 4th-grade students through leadership training at Josephine Houston Elementary.
                  </li>

                  <li><strong>Pioneer Academics – Alumni Advisory Board Member (2021–Present)</strong><br />
                    Represented alumni perspectives, supported high school researchers, and advised across multiple research cohorts.
                  </li>

                  <li><strong>Private Tutor (2016–2024)</strong><br />
                    Tutored ages 5–16 in math and science; mentored high schoolers through college essays and Common App reviews.
                  </li>

                  <li><strong>HBCU First – Near Peer Mentor (Jan–Apr 2022)</strong><br />
                    Provided 10-week, 1:1 college and career mentorship; earned Day-One-Ready certification after completing 40 hours of executive-led training.
                  </li>

                  <li><strong>Career Pathway Initiative – Supplemental Instructor (Summer 2021)</strong><br />
                    TA for Business Acumen and Public Speaking; led app development sessions for startup challenge program.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="engLinkedin">
            <a href="https://www.linkedin.com/in/yvonne-jose-o/" ><FaLinkedinIn /></a>
            <h4>yvonneoa@umich.edu</h4>
          </div>
        </Container>
        <Container>
          <div className="grid-container">
            {images.map((imgSrc, idx) => (
              <div className="grid-item" key={idx}>
                <img src={imgSrc} alt={`img-${idx}`} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}