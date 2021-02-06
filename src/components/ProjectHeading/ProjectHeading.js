import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faJs,
  faCss3Alt,
  faReact,
  faHtml5,
  faNpm,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const ProjectHeading = () => {
  return (
    <div className="w-100 mx-0">
      <h1 className="text-center my-4">My Projects</h1>
      <div
        style={{
          background: "#21392b",
          color: "#e0e0e0",
          borderRadius: "15px",
        }}
        className=" pt-2"
      >
        <h5 style={{ color: "#e0e0e0" }} className="text-center my-2">
          Built Using These Technologies
        </h5>
        <ListGroup
          horizontal
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ListGroup.Item>
            <FontAwesomeIcon
              size="3x"
              icon={faNode}
              className="mx-2 icons-sm"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon size="3x" icon={faJs} className="mx-2 icons-sm" />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon
              size="3x"
              icon={faCss3Alt}
              className="mx-2 icons-sm"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon
              size="3x"
              icon={faReact}
              className="mx-2 icons-sm"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon
              size="3x"
              icon={faHtml5}
              className="mx-2 icons-sm"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon size="3x" icon={faNpm} className="mx-2 icons-sm" />
          </ListGroup.Item>
          <ListGroup.Item>
            <FontAwesomeIcon size="3x" icon={faGit} className="mx-2 icons-sm" />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default ProjectHeading;
