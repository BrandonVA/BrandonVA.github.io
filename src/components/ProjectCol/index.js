import React from "react";
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Col from "react-bootstrap/Col";
import "./style.css";

const ProjectCard = ({ title, deployedUrl, repoUrl, image, desc }) => {
  return (
    <Col>
      <Card className="shadow">
        <Card.Img
          variant="top"
          className={"cardImg"}
          src={`${process.env.PUBLIC_URL}/images/${image}`}
        />
        <Card.Body className="pb-0">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc !== undefined ? desc : "This is sample project text"}
          </Card.Text>
          <Breadcrumb className="mt-3">
            <Breadcrumb.Item href={deployedUrl}>Visit</Breadcrumb.Item>
            <Breadcrumb.Item href={repoUrl}>Github Repo</Breadcrumb.Item>
          </Breadcrumb>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
