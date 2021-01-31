import React from "react";
import "./style.css";

function Footer() {
  const styles = {
    width: "100%",
    height: "60px",
  };
  return (
    <footer className="footer mt-auto" style={styles}>
      <p>&#169; Brandon VanAllen 2021</p>
    </footer>
  );
}

export default Footer;
