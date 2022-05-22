import React from "react";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Login from "../lib/pages/admin/login";
import jwt_decode from "jwt-decode";
import Home from "../lib/pages/admin/home";

export default function admin() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);
  const [jwt, setJwt] = useState(null);

  const handleSetAuth = (data) => {
    setAuth((prev) => data);
  };

  const handleAuth = (token, fromLogin = true) => {
    try {
      let decoded = jwt_decode(token);
      if (fromLogin) {
        localStorage.setItem("alvesharp", token);
        setJwt(token);
        handleSetAuth(decoded.data);
      } else {
        if (Date.now() >= decoded.exp * 1000) {
          alert("Login expired, please login again");
        } else {
          handleSetAuth(decoded.data);
        }
      }
    } catch (error) {
      alert("An error occurred!: " + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (window) {
      const lst = localStorage.getItem("alvesharp");
      setJwt(lst);
      if (lst) {
        handleAuth(lst, false);
      }
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading && <Center h="100vh">Loading...</Center>}
      {!loading && !auth && <Login handleAuth={handleAuth} />}
      {auth && <Home auth={auth} jwt={jwt} />}
    </>
  );
}
