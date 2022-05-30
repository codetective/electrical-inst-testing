import Projects from "../lib/pages/projects";

import React from "react";
import { ProjectProvider } from "../lib/pages/projects/ProjectContext";

function projects() {
  return (
    <ProjectProvider>
      <Projects />
    </ProjectProvider>
  );
}

export default projects;
