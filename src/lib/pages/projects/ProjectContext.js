import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
const headers = { "Content-Type": "application/json" };

const ProjectContext = React.createContext({});

export const usePCtx = () => {
  return React.useContext(ProjectContext);
};
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case "FETCH_PROJECTS":
        setLoading(true);
        setError(false);

        axios
          .get(API_BASE_URL + "/api/projects.php")
          .then((response) => {
            setLoading(false);
            setProjects(response.data.projects);
          })
          .catch((error) => {
            setLoading(false);
            setError(true);
          });

        return;

      default:
        return;
    }
  };

  useEffect(() => {
    dispatchEvent("FETCH_PROJECTS", null);
  }, []);

  return (
    <ProjectContext.Provider
      value={{ error, projects, dispatchEvent, loading }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;
