import React from "react";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Col, Row } from "react-bootstrap";
import "./style.css";

const index = () => {
  const styles = {
    container: { width: "100%", flexDirection: "row" },
    subContainer: {
      width: "50%",
    },
    img: {
      maxWidth: "400px",
      maxHeight: "600px",
      width: "70%",
      height: "auto",
      margin: " 0 auto",
    },
    body: {},
  };
  return (
    <Row>
      <Col>
        <Card style={styles.container} className="shadow">
          <div style={styles.subContainer} className="subContainer">
            {" "}
            <Card.Img
              style={styles.img}
              // variant="top"
              className={"cardImg featured-img"}
              src={`${process.env.PUBLIC_URL}/images/dashboard.png`}
            />
          </div>
          <div style={styles.subContainer} className="subContainer">
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Card.Title className="text-center">The Smoking Gun</Card.Title>
              <Card.Text>
                The Smoking Gun Bullet Journals shot up what normally is a
                stationary activity and brought bullet journaling to the web.
                This app is a task manager, sketchbook, journal, idea catcher,
                and much more!
              </Card.Text>
              <hr />
              <Card.Title className="text-center">My Role</Card.Title>
              <Card.Text>
                This project is a full stack MERN app that was built using
                Material-ui as the front end framework. This was a group project
                with 3 other group members. my role in the project was working
                with the sign up/log in page along with setting up firebase
                authentication and creating a doodle page that was built using
                the HTML5 canvas api.
              </Card.Text>
              <div style={{ marginTop: "auto" }}>
                <Breadcrumb className="mt-3">
                  <Breadcrumb.Item className="heading-text" href={"#"}>
                    Visit
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href={"#"}>Github Repo</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default index;
