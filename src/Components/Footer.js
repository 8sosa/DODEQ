import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from '../Images/logo.jpeg';
import './Footer.css';

export default function Footer() {
    const navLinks = [
        { to: "/yvie-style-it", label: "Yvie Style It" },
        // { to: "/yvie-flexit", label: "Yvie Flex It" },
        // { to: "/yvie-writesit", label: "Yvie Writes It" },
        // { to: "/yvies-speaking", label: "Yvie’s Speaking" },
        // { to: "/yvies-cooking", label: "Yvie’s Cooking" },
        // { to: "/yvies-outreach", label: "Yvie’s Outreach" },
        // { to: "/yvies-event", label: "Yvie’s Event" },
        // { to: "/yvie-does-collaborations", label: "Yvie Does Collaborations" },
        // { to: "/yvie-x-society", label: "Yvie × Society" },
        // { to: "/yvies-just-living", label: "Yvie’s Just Living" },
        // { to: "/about-faq", label: "About & FAQ" },
    ];

  return (
    <footer className='footer'>
      <Container className='footerBody' id='footer'>
        <Row>
          {/* Left Section */}
          <Col md={4}>
            <div className="footer-left">
                <img src={Logo} alt="She Unites Business Logo" className='footerLogo'/>
                <p className="kavoon">"Living boldly, creating fearlessly."</p>
            </div>
            <hr className="footer-divider"/>
            <div className="d-flex flex-column align-items-center">
                <h3 className="ffooterLinkHeader altMont mb-3">Get in Touch</h3>
                <p className='mont'>Email: <a href="mailto:contact@yvie.com" className="footer-link">contact@yvie.com</a></p>
                <p className='mont'>Phone: (447) 999 7898</p>
                <button className="footer-button mt-3">Contact Me</button>
            </div>
          </Col>

          {/* Middle Section */}
          <Col md={4} className="footer-middle">
            <h3 className="ffooterLinkHeader altMont">Explore</h3>
            <ul className="footer-list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className="footer-link mont">{label}</NavLink>
                </li>
              ))}
            </ul>
          </Col>

          {/* Right Section */}
          <Col md={4} className="footer-right">
            <h3 className="ffooterLinkHeader">Stay In The Loop</h3>
            <p className="footer-text">Get updates on events, new collections, and more.</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email Address" className="footer-input"/>
              <button className="footer-button">Subscribe</button>
            </div>
            <hr className="footer-divider"/>
            <h3 className="ffooterLinkHeader altMont">Connect With Me:</h3>
            <div className="footer-socials">
              <a href="#footer" className="footer-icon"><FaLinkedin /></a>
              <a href="#footer" className="footer-icon"><FaFacebookF /></a>
              <a href="#footer" className="footer-icon"><FaInstagram /></a>
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
