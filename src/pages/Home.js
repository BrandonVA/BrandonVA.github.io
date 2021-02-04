import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const styles = {
    colImage: {
      maxWidth: "350px",
      height: "auto",
    },
  };
  window.document.title = "Brandon VanAllen | Home";
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row className="mt-5">
        <Col className="mt-5 p-3" lg={6} sm={12}>
          {/* <h1 className="mb-5">Hello I'm Brandon VanAllen</h1> */}
          {/* <h3 className="mb-4"> Full Stack Web Developer</h3> */}
          <div className=" sm-center">
            <img
              style={styles.colImage}
              className="profile-pic rounded img-fluid shadow"
              src={`${process.env.PUBLIC_URL}/images/Portfolio-pic.jpg`}
              alt="profile-pic"
            />
          </div>
        </Col>
        <Col className="mb-5 p-3" lg={6} sm={12}>
          <div>
            <h3 className="mb-4 sm-center">About Me</h3>
            <p className="about-me">
              Hi I'm Brandon VanAllen I'm a Full Stack Web Developer. I recently
              graduated from UW Full Stack Coding Bootcamp. I'm passionate about
              building applications and enjoy solving the problems that one
              would encounter developing applications. I'm excited to change my
              career into something that is challenging and has a lot of room to
              grow.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
