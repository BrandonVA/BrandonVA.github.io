import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import ProjectCol from "../ProjectCol/index";
import ProjectsContext from "../../utils/ProjectsContext";

const ProjectRow = () => {
  const projects = useContext(ProjectsContext);
  console.log(projects);
  return (
    <Row lg={3} md={2} xs={1}>
      {projects.map((item, index) => (
        <ProjectCol key={index} {...item} />
      ))}
    </Row>
  );
};

export default ProjectRow;
