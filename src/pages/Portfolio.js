import React from "react";
import Container from "react-bootstrap/Container";
import ProjectRow from "../components/ProjectRow/index";
import ProjectsContext from "../utils/ProjectsContext";
import projects from "../utils/projectData";

const Portfolio = () => {
  window.document.title = "Brandon VanAllen | Portfolio";
  return (
    <div>
      <ProjectsContext.Provider value={projects}>
        <Container>
          <ProjectRow />
        </Container>
      </ProjectsContext.Provider>
    </div>
  );
};

export default Portfolio;
