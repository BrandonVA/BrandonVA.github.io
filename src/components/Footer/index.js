import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./style.css";

function Footer() {
  const styles = {
    width: "100%",
    height: "60px",
    color: "white",
  };

  return (
    <footer className=" container-fluid py-3 footer">
      <div className="row">
        <div className="col-lg-5"></div>
        <div className="col-lg-2">
          <div className="center-block center-sm ">
            <a
              href="https://www.linkedin.com/in/brandon-vanallen-057419130/"
              target="_blank"
            >
              <i className="fab fa-linkedin footer-icon"></i>
              <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
              Brandon VanAllen
            </a>
          </div>
          <div className="center-block center-sm ">
            <a href="https://github.com/BrandonVA" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="footerIcon" />
              BrandonVA
            </a>
          </div>
          <div className="center-block center-sm ">
            <p style={{ marginBottom: 0 }}>&#169; Brandon VanAllen</p>
          </div>
        </div>
        <div className="col-lg-5"></div>
      </div>
    </footer>
  );
}

export default Footer;
