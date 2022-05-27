import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
const headers = { "Content-Type": "application/json" };

const AdminContext = React.createContext({});

export const useCtx = () => {
  return React.useContext(AdminContext);
};
export const AdminProvider = ({ children }) => {
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

      case "DELETE_PROJECT":
        setProjects(projects.filter((post) => post.id !== payload.id));
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    dispatchEvent("FETCH_PROJECTS", null);
  }, []);

  return (
    <AdminContext.Provider value={{ error, projects, loading, dispatchEvent }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
