import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const setActiveClass = (value) =>
    value === currentPage ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#020202" }}>
      <Link className="navbar-brand" to="/">
        Brandon VanAllen
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              onClick={() => setCurrentPage("/")}
              className={setActiveClass("/")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              onClick={() => setCurrentPage("/portfolio")}
              className={setActiveClass("/portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              onClick={() => setCurrentPage("/contact")}
              className={setActiveClass("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
