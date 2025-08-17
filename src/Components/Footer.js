import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from '../Images/logo.png';
import './Footer.css';

export default function Footer() {
  const navLinks = [
    { to: "/yvie-style-it", label: "Yvie Style It", ariaLabel: "Yvie Style It" },
    { to: "/yvies-speaks-it", label: "Yvie’s Speaks It", ariaLabel: "Yvie’s Speaks It" },
    { to: "/yvie-write-it", label: "Yvie Writes It", ariaLabel: "Yvie Writes It" },
    { to: "/yvie-is-an-engineer", label: "Yvie is an Engineer?", ariaLabel: "Yvie is an Engineer?" },
    // { to: "/yvie-flexit", label: "Yvie Flex It", ariaLabel: "Yvie Flex It" },
    // { to: "/yvies-outreach", label: "Yvie’s Outreach", ariaLabel: "Yvie’s Outreach" },
    // { to: "/yvies-event", label: "Yvie’s Event", ariaLabel: "Yvie’s Event" },
    // { to: "/yvies-just-living", label: "Yvie’s Just Living", ariaLabel: "Yvie’s Just Living" },
    
    // { to: "/yvies-cooking", label: "Yvie’s Cooking", ariaLabel: "Yvie’s Cooking" },
    // { to: "/yvie-x-society", label: "Yvie × Society", ariaLabel: "Yvie × Society" },
    // { to: "/yvie-does-collaborations", label: "Yvie Does Collaborations", ariaLabel: "Yvie Does Collaborations" },
  ];

  return (
    <footer className='footer'>
      <Container className='footerBody' id='footer'>
        <Row className='mt-4'>
          {/* Left Section */}
          <Col md={4} className="footer-left-col">
            <div className="footer-left">
                <img src={Logo} alt="She Unites Business Logo" className='footerLogo'/>
                <p className="kavoon">"Living boldly, creating fearlessly."</p>
            </div>
            <button className='footerMailBtn mont'><a href="mailto:admin@yviedodeq.com">admin@yviedodeq.com</a></button>
          </Col>

          {/* Middle Section */}
          <Col md={8} className="footer-middle">
            <div>
              <h3 className="ffooterLinkHeader altMont">Explore</h3>
              <ul className="footer-list">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink to={to} className="footer-link mont">{label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-social">
              <h3 className="ffooterLinkHeader altMont">Social Profiles</h3>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/company/the-yvie-dodeq-ltd/" className="footer-icon"><FaLinkedin /></a>
                <a href="#footer" className="footer-icon"><FaFacebookF /></a>
                <a href="https://www.instagram.com/yviestyleit/" className="footer-icon"><FaInstagram /></a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer Section */}
        <Row className='bottomFooter'>
          <Col xs={9} className='footer-copyright'>
            <p>© 2025 YvieDodeQ. All Rights Reserved.</p>
          </Col>
          <Col className='footer-policy'>
            <p><NavLink to="/privacy-policy" className="footer-link">Privacy Policy</NavLink></p>
            <p><NavLink to="/terms-of-use" className="footer-link">Terms of Use</NavLink></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
