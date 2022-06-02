import axios from "axios";
import React, { useState } from "react";
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
            if (response.data.projects) {
              setProjects(response.data.projects);
            } else {
              setError(true);
            }
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

  return (
    <AdminContext.Provider value={{ error, projects, loading, dispatchEvent }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
