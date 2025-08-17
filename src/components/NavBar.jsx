import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const SECTIONS = ["Home", "About", "Resume", "Projects", "Statistics", "Contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`navbar-dark navbar-glass ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#" className="brand">Kotesh Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {SECTIONS.map(s => (
              <Nav.Link
                as={ScrollLink}
                key={s}
                to={s.toLowerCase()}
                spy={true}
                smooth={true}
                duration={400}
                offset={-100}
                activeClass="active"
                className="nav-item-uppercase"
              >
                {s}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

