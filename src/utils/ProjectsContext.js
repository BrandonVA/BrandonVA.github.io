import React from "react";

const ProjectsContext = React.createContext({
  title: "",
  deployedUrl: "",
  repoUrl: "",
  image: "",
});

export default ProjectsContext;
