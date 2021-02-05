import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faLaptopCode,
  faDatabase,
  faTabletAlt,
  faMobileAlt,
  faServer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const styles = {
    colImage: {
      maxWidth: "200px",
      width: "100%",
      height: "auto",
      borderRadius: "20%",
    },
  };
  window.document.title = "Brandon VanAllen | Home";
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row className="mt-5">
        <Col lg={12} className="text-center">
          {/* <h1 className="mb-5">Hello I'm Brandon VanAllen</h1> */}
          <h1 className="my-4"> Full Stack Web Developer</h1>
          {/* <code>{codeText}</code> */}
          <div className=" sm-center">
            <img
              style={styles.colImage}
              className="profile-pic img-fluid shadow my-5"
              src={`${process.env.PUBLIC_URL}/images/Portfolio-pic.jpg`}
              alt="profile-pic"
            />
          </div>
          <Row className="mt-5">
            <Col className="my-5 px-0">
              <div className="my-5 mainIcons">
                <FontAwesomeIcon
                  size="5x"
                  icon={faTabletAlt}
                  className="mx-2 icons-sm"
                />
                <FontAwesomeIcon
                  size="7x"
                  icon={faDatabase}
                  className="mx-2 icons-md"
                />
                <FontAwesomeIcon
                  size="10x"
                  icon={faDesktop}
                  className="mx-2 icons-lg"
                />
                <FontAwesomeIcon
                  size="7x"
                  icon={faLaptopCode}
                  className="mx-2 icons-md"
                />
                <FontAwesomeIcon
                  size="5x"
                  icon={faMobileAlt}
                  className="mx-2 icons-sm"
                />
              </div>
              <div style={{ background: "#21392b" }}>
                <h3 className="my-4 pt-3 pb-1" style={{ color: "#e0e0e0" }}>
                  About Me
                </h3>
                <p
                  className="about-me text-left px-5 py-5"
                  style={{ color: "#e0e0e0" }}
                >
                  Hi I'm Brandon VanAllen I'm a Full Stack Web Developer. I
                  recently graduated from UW Full Stack Coding Bootcamp. I'm
                  passionate about building applications and enjoy solving the
                  problems that one would encounter developing applications. I'm
                  excited to change my career into something that is challenging
                  and has a lot of room to grow.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="px-5">
            <Col md={6} sm={12} className="my-3">
              <div className="p-3 shadow">
                {" "}
                <h4>
                  Front-End
                  <FontAwesomeIcon size="1x" icon={faCode} className="mx-2" />
                </h4>
                <hr />
                <p>
                  I love the challenge of creating a good UI and and making a
                  bug free experience.
                </p>
                <h5>Languages</h5>
                <p>React.js, HTML5, CSS3, JS</p>
                <h5>Some Dev Tools </h5>
                <ListGroup variant="flush">
                  <ListGroup.Item>Bootstrap</ListGroup.Item>
                  <ListGroup.Item>JQuery</ListGroup.Item>
                  <ListGroup.Item>VS Code</ListGroup.Item>
                  <ListGroup.Item>GitHub</ListGroup.Item>
                  <ListGroup.Item>Git Bash</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col md={6} sm={12} className="my-3">
              <div className="p-3 shadow">
                <h4>
                  Back-End{" "}
                  <FontAwesomeIcon size="1x" icon={faServer} className="mx-2" />
                </h4>

                <hr />
                <p>
                  I'm passionate about building servers and solving the problems
                  that comes with building a server and connecting it to a
                  database.
                </p>
                <h5>Technologies</h5>
                <p>Node.js, Express.js, MongoDB,MySQL</p>
                <h5>Some Dev Tools</h5>
                <ListGroup variant="flush">
                  <ListGroup.Item>Mongoose</ListGroup.Item>
                  <ListGroup.Item>Sequelize</ListGroup.Item>
                  <ListGroup.Item>Axios</ListGroup.Item>
                  <ListGroup.Item>Passport</ListGroup.Item>
                  <ListGroup.Item>Robo 3T</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
