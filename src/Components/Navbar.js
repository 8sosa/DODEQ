import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { FaLinkedinIn, FaThreads, FaInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Logo from '../Images/logo.png';

export default function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { to: "/yvie-style-it", label: "Yvie Style It", ariaLabel: "Yvie Style It" },
    // { to: "/yvie-flexit", label: "Yvie Flex It", ariaLabel: "Yvie Flex It" },
    // { to: "/yvies-speaking", label: "Yvie’s Speaking", ariaLabel: "Yvie’s Speaking" },
    { to: "/yvie-write-it", label: "Yvie Writes It", ariaLabel: "Yvie Writes It" },
    // { to: "/yvies-cooking", label: "Yvie’s Cooking", ariaLabel: "Yvie’s Cooking" },
    { to: "/yvie-is-an-engineer", label: "Yvie is an Engineer?", ariaLabel: "Yvie is an Engineer?" },
    // { to: "/yvies-outreach", label: "Yvie’s Outreach", ariaLabel: "Yvie’s Outreach" },
    // { to: "/yvies-event", label: "Yvie’s Event", ariaLabel: "Yvie’s Event" },
    // { to: "/yvie-x-society", label: "Yvie × Society", ariaLabel: "Yvie × Society" },
    { to: "/yvies-just-living", label: "Yvie’s Just Living", ariaLabel: "Yvie’s Just Living" },
    // { to: "/yvie-does-collaborations", label: "Yvie Does Collaborations", ariaLabel: "Yvie Does Collaborations" },
  ];
  

  const renderNavLinks = (onClick = () => {}) =>
    navLinks.map(({ to, label, ariaLabel }) => (
      <Nav.Link
        key={to}
        as={to.includes("#") ? HashLink : NavLink}
        to={to}
        className="navLink inter"
        onClick={onClick}
        aria-label={ariaLabel}
        smooth="true"
      >
        {label}
      </Nav.Link>
    ));

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar glass" as="nav">
      <Container className="navbarContainer">
        <div className='topNavbar'>
            <Navbar.Brand href="/">
                <img src={Logo} alt="SUA Logo" className="logo" />
            </Navbar.Brand>
            <div>
                <Form className='searchBarLg mont'>
                    <Form.Control className='inputField' name="query" type="text" placeholder="Search" autoComplete='true'/>
                    <Button type='submit' className='searchButton'><CiSearch /></Button>
                </Form>
            </div>
            <div >
                <div className='navSocials mid'>
                  <a href='https://www.instagram.com/yviestyleit/' className='navSocial'><FaThreads /></a>
                  <a href='https://www.instagram.com/yviestyleit/' className='navSocial'><FaInstagram /></a>
                  <a href='www.linkedin.com/company/the-yvie-dodeq-ltd' className='navSocial'><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
        <div className='bottomNavbar mont'>
            {/* Desktop Links */}
            <div className="navLinks">{renderNavLinks()}</div>
            <div>
                <Form className='searchBarSm mont'>
                    <Form.Control className='inputField' name="query" type="text" placeholder="Search" autoComplete='true'/>
                    <Button type='submit' className='searchButton'><CiSearch /></Button>
                </Form>
            </div>
            {/* Mobile Menu Toggle */}
            <RiMenu4Line onClick={handleShow} className="navbarToggle"/>
        </div>
      </Container>
      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="navbarMenu">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="d-flex flex-column align-items-center">
          {renderNavLinks(handleClose)}
          <div className='d-flex flex-row navSocials'>
            <FaThreads className='navSocial'/>
            <a href='https://www.instagram.com/yviestyleit/'><FaInstagram className='navSocial'/></a>
            <a href='www.linkedin.com/company/the-yvie-dodeq-ltd'><FaLinkedinIn className='navSocial'/></a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}