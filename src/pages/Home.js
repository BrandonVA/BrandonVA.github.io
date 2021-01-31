import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const styles = {
    colInfo: {
      width: "40%",
      height: "auto",
    },
    headingOne: {
      // display: "flex",
      // justifyContent: "flex-end",
      // marginRight: "3rem",
      color: "white",
    },
  };
  window.document.title = "Brandon VanAllen | Home";
  return (
    <>
      <Row>
        <Col className="text-center">
          <div>
            <h1 style={styles.headingOne} className="headingFonts">
              Hello I'm Brandon VanAllen
            </h1>

            <img
              style={styles.colInfo}
              className="text-center mx-auto"
              // style={{ width: "400px", height: "auto" }}
              src={`${process.env.PUBLIC_URL}/images/ProfileImg.jpg`}
              alt="profile-pic"
            />
            <h3 className="headingFonts" style={styles.headingOne}>
              {" "}
              Full Stack Web Developer
            </h3>
          </div>
          {/* </Col>
        <Col
          className="text-white"
          style={(styles.colInfo, { margin: 0, padding: 0 })}
        > */}
        </Col>
      </Row>
    </>
  );
};

export default Home;
