import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from '../Images/logo.png';
import './Footer.css';

export default function Footer() {
  const navLinks = [
    { to: "/yvie-style-it", label: "Yvie Style It", ariaLabel: "Yvie Style It" },
    // { to: "/yvies-speaks-it", label: "Yvie’s Speaks It", ariaLabel: "Yvie’s Speaks It" },
    { to: "/yvie-write-it", label: "Yvie Writes It", ariaLabel: "Yvie Writes It" },
    { to: "/yvie-is-an-engineer", label: "Yvie is an Engineer?", ariaLabel: "Yvie is an Engineer?" },
    { to: "/yvies-outreach", label: "Yvie’s Outreach", ariaLabel: "Yvie’s Outreach" },
    { to: "/yvies-event", label: "Yvie’s Event", ariaLabel: "Yvie’s Event" },
    { to: "/yvies-just-living", label: "Yvie’s Just Living", ariaLabel: "Yvie’s Just Living" },
    
    // { to: "/yvie-flexit", label: "Yvie Flex It", ariaLabel: "Yvie Flex It" },
    // { to: "/yvies-cooking", label: "Yvie’s Cooking", ariaLabel: "Yvie’s Cooking" },
    // { to: "/yvie-x-society", label: "Yvie × Society", ariaLabel: "Yvie × Society" },
    // { to: "/yvie-does-collaborations", label: "Yvie Does Collaborations", ariaLabel: "Yvie Does Collaborations" },
  ];

  return (
    <footer className='footer'>
      <Container className='footerBody' id='footer'>
        <Row className='mt-4 footer-main'>
          {/* Left Section */}
          <Col xs={12} md={4} className="footer-left-col mb-4 mb-md-0">
            <div className="footer-left">
              <img src={Logo} alt="She Unites Business Logo" className='footerLogo'/>
              <p className="kavoon footer-quote">"Living boldly, creating fearlessly."</p>
              <a href="mailto:admin@yviedodeq.com" className='footerMailBtn mont'>
                admin@yviedodeq.com
              </a>
            </div>
          </Col>

          {/* Right Section (Explore + Socials) */}
          <Col xs={12} md={8} className="footer-right">
            <Row>
              <Col xs={12} sm={6} className="footer-explore">
                <h3 className="footerLinkHeader altMont">Explore</h3>
                <ul className="footer-list">
                  {navLinks.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink to={to} className="footer-link mont">{label}</NavLink>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} sm={6} className="footer-social">
                <h3 className="footerLinkHeader altMont">Social Profiles</h3>
                <div className="footer-socials">
                  <a href="https://www.linkedin.com/company/the-yvie-dodeq-ltd/" className="footer-icon"><FaLinkedin /></a>
                  <a href="#footer" className="footer-icon"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/yviestyleit/" className="footer-icon"><FaInstagram /></a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className='bottomFooter'>
          <Col xs={12} md={6} className='footer-copyright'>
            <p>© 2025 YvieDodeQ. All Rights Reserved.</p>
          </Col>
          <Col xs={12} md={6} className='footer-policy'>
            <NavLink to="/privacy-policy" className="footer-link">Privacy Policy</NavLink>
            <NavLink to="/terms-of-use" className="footer-link">Terms of Use</NavLink>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
