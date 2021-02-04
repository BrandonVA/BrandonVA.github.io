import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

function Footer() {
  return (
    <footer className=" container-fluid py-3 footer mt-3">
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-2">
          <div className="center-block center-sm ">
            <a
              href="https://www.linkedin.com/in/brandon-vanallen-057419130/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin footer-icon"></i>
              <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
              Brandon VanAllen
            </a>
          </div>
          <div className="center-block center-sm ">
            <a
              href="https://github.com/BrandonVA"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="footerIcon" />
              BrandonVA
            </a>
          </div>
          <div className="center-block center-sm ">
            <p className="footer-text" style={{ marginBottom: 0 }}>
              &#169; Brandon VanAllen
            </p>
          </div>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </footer>
  );
}

export default Footer;
