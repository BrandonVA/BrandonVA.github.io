import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const styles = {
    colImage: {
      width: "35%",
      height: "auto",
      minWidth: "300px",
    },
    headingOne: {
      color: "white",
    },
  };
  window.document.title = "Brandon VanAllen | Home";
  return (
    <>
      <Row>
        <Col className="text-center">
          <div>
            <h1 style={styles.headingOne} className=" h1">
              Hello I'm Brandon VanAllen
            </h1>
            <img
              style={styles.colImage}
              className="text-center mx-auto profile-pic"
              src={`${process.env.PUBLIC_URL}/images/ProfileImg.jpg`}
              alt="profile-pic"
            />
            <h3 className="" style={styles.headingOne}>
              {" "}
              Full Stack Web Developer
            </h3>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
