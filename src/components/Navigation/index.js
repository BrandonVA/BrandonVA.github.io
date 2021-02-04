import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function Navigation() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const setActiveClass = (value) =>
    value === currentPage ? "navLink active" : "navLink";

  return (
    <Navbar expand="lg" className="bg-nav" variant="dark">
      <Link className="navbarBrand" to="/" style={{ fontSize: "1.6rem" }}>
        <img
          style={{
            width: "1.5rem",
            height: "1.5rem",
            marginRight: "5px",
            paddingBottom: "2px",
          }}
          src={`${process.env.PUBLIC_URL}/favicon_io/favicon-32x32.png`}
          alt=""
        />
        Brandon VanAllen
      </Link>
      <Navbar.Toggle aria-controls="collapseNav" />
      <Navbar.Collapse id="collapseNav">
        <Nav className="ml-auto text-center">
          <Link
            to="/"
            onClick={() => setCurrentPage("/")}
            className={setActiveClass("/")}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setCurrentPage("/portfolio")}
            className={setActiveClass("/portfolio")}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setCurrentPage("/contact")}
            className={setActiveClass("/contact")}
          >
            Contact
          </Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
