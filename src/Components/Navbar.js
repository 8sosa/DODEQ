import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState, useEffect, useRef, useMemo } from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink, Link } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { FaLinkedinIn, FaThreads, FaInstagram } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { searchContent } from "../utils/contentfulSearch";
import Logo from '../Images/logo.png';

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // 🔑 separate refs for LG and SM search areas
  const searchRefLg = useRef(null);
  const searchRefSm = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 🧭 Edit these routes to match where each content type lives
  const ROUTE_BY_TYPE = useMemo(() => ({
    // contentful types -> route base (we'll add #id)
    books: "/yvie-write-it",
    poem: "/yvie-write-it",
    blogPost: "/yvie-is-an-engineer",
    collections: "/yvie-style-it",
  }), []);

  const hashLinkFor = (type, item) => {
    const base = ROUTE_BY_TYPE[type] || "/";
    return `${base}#${item?.sys?.id}`;
  };

  const navLinks = [
    { to: "/", label: "Home", ariaLabel: "Home" },
    { to: "/about-us", label: "About Us", ariaLabel: "About Us" },
    { to: "/yvie-style-it", label: "Yvie Style It", ariaLabel: "Yvie Style It" },
    { to: "/yvie-write-it", label: "Yvie Writes It", ariaLabel: "Yvie Writes It" },
    { to: "/yvie-is-an-engineer", label: "Yvie is an Engineer?", ariaLabel: "Yvie is an Engineer?" },
    { to: "/yvies-outreach", label: "Yvie’s Outreach", ariaLabel: "Yvie’s Outreach" },
    // { to: "/yvies-event", label: "Yvie’s Event", ariaLabel: "Yvie’s Event" },
    { to: "/yvies-just-living", label: "Yvie’s Just Living", ariaLabel: "Yvie’s Just Living" },
    
    // { to: "/yvie-flexit", label: "Yvie Flex It", ariaLabel: "Yvie Flex It" },
    // { to: "/yvies-cooking", label: "Yvie’s Cooking", ariaLabel: "Yvie’s Cooking" },
    // { to: "/yvie-x-society", label: "Yvie × Society", ariaLabel: "Yvie × Society" },
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

  // 🔎 Debounced search
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) {
        searchContent(query).then((data) => {
          setResults(data);
          setShowDropdown(true);
        });
      } else {
        setResults(null);
        setShowDropdown(false);
      }
    }, 400);
    return () => clearTimeout(delay);
  }, [query]);

  // 🧰 Close when clicking outside BOTH search refs; use 'click' not 'mousedown'
  useEffect(() => {
    function handleClickOutside(e) {
      const insideLg = searchRefLg.current && searchRefLg.current.contains(e.target);
      const insideSm = searchRefSm.current && searchRefSm.current.contains(e.target);
      if (!insideLg && !insideSm) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✨ Reusable dropdown renderer
  const renderDropdown = () => {
    if (!showDropdown || !results) return null;

    return (
      <div
        className="search-dropdown"
        role="listbox"
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#fff",
          borderRadius: "1rem",
          zIndex: 1050,
          maxHeight: "260px",
          overflowY: "auto",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          // border: "1px solid rgba(0,0,0,0.08)",
          marginTop: "0.5rem"
        }}
        // extra safety so clicks inside never bubble to the document handler
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Collections */}
        {results.collectionsCollection?.items?.length > 0 && (
          <>
            <div className="dropdown-section px-3 pt-3 pb-1 text-muted fw-semibold">📦 Collections</div>
            {results.collectionsCollection.items.map((c) => (
              <Link
                key={c?.sys?.id}
                to={hashLinkFor("collections", c)}
                className="text-decoration-none text-reset"
                onClick={() => setShowDropdown(false)}
              >
                <div className="dropdown-item px-3 py-2" role="option" aria-selected="false">
                  {c.title}
                </div>
              </Link>
            ))}
            <hr className="my-2" />
          </>
        )}

        {/* Poems */}
        {results.poemCollection?.items?.length > 0 && (
          <>
            <div className="dropdown-section px-3 pt-2 pb-1 text-muted fw-semibold">✍️ Poems</div>
            {results.poemCollection.items.map((p) => (
              <Link
                key={p?.sys?.id}
                to={hashLinkFor("poem", p)}
                className="text-decoration-none text-reset"
                onClick={() => setShowDropdown(false)}
              >
                <div className="dropdown-item px-3 py-2" role="option" aria-selected="false" >
                  {p.title}
                </div>
              </Link>
            ))}
            <hr className="my-2" />
          </>
        )}

        {/* Blog Posts */}
        {results.blogPostCollection?.items?.length > 0 && (
          <>
            <div className="dropdown-section px-3 pt-2 pb-1 text-muted fw-semibold">📰 Blog Posts</div>
            {results.blogPostCollection.items.map((post) => (
              <Link
                key={post?.sys?.id}
                to={hashLinkFor("blogPost", post)}
                className="text-decoration-none text-reset"
                onClick={() => setShowDropdown(false)}
              >
                <div className="dropdown-item px-3 py-2" role="option" aria-selected="false">
                  {post.title}
                </div>
              </Link>
            ))}
            <hr className="my-2" />
          </>
        )}

        {/* Books */}
        {results.booksCollection?.items?.length > 0 && (
          <>
            <div className="dropdown-section px-3 pt-2 pb-1 text-muted fw-semibold">📚 Books</div>
            {results.booksCollection.items.map((b) => (
              <Link
                key={b?.sys?.id}
                to={hashLinkFor("books", b)}
                className="text-decoration-none text-reset"
                onClick={() => setShowDropdown(false)}
              >
                <div className="dropdown-item px-3 py-2 d-flex align-items-center gap-2" role="option" aria-selected="false">
                  {b.image?.url && (
                    <img src={b.image.url} alt={b.title} width={28} height={28} style={{ objectFit: "cover", borderRadius: 4 }} />
                  )}
                  <span>{b.title}</span>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar glass" as="nav">
      <Container className="navbarContainer">
        <div className='topNavbar'>
          <Navbar.Brand href="/">
            <img src={Logo} alt="SUA Logo" className="logo" />
          </Navbar.Brand>

          {/* 🔎 Desktop / large search */}
          <div style={{ position: "relative", flex: 1 }} ref={searchRefLg}>
            <Form className="mont searchBarLg" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                className="inputField"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search"
                autoComplete="on"
                onFocus={() => query.trim() && setShowDropdown(true)}
              />
              <Button type="submit" className="searchButton">
                <CiSearch />
              </Button>
            </Form>
            {renderDropdown()}
          </div>

          <div>
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

          {/* 🔎 Mobile / small search */}
          <div style={{ position: "relative" }} ref={searchRefSm}>
            <Form className="mont searchBarSm" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                className="inputField"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search"
                autoComplete="on"
                onFocus={() => query.trim() && setShowDropdown(true)}
              />
              <Button type="submit" className="searchButton">
                <CiSearch />
              </Button>
            </Form>
            {renderDropdown()}
          </div>

          {/* Mobile Menu Toggle */}
          <RiMenu4Line onClick={handleShow} className="navbarToggle" />
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
