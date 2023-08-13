import { React, useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { navLinks } from "../data/index";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const ChangeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    ChangeBackgroundColor();
    window.addEventListener("scroll", ChangeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", ChangeBackgroundColor);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${changeColor ? "color-active" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home">Course Ngoding</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => (
              <div className="nav-link" key={link.id}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={link.path}
                  href="#home"
                >
                  {link.text}
                </NavLink>
              </div>
            ))}
          </Nav>
          <Button style={{ display: "block", margin: "0 auto" }}>
            Join With Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
