import WrapContent from "../lib/layout/WrapContent";
import React from "react";
import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Login from "../lib/pages/admin/login";
import jwt_decode from "jwt-decode";

export default function admin() {
  const [ready, setReadyState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [jwt, setjwt] = useState(null);
  const [auth, setAuth] = useState(null);

  const handleJWT = (token) => {
    let decoded = jwt_decode(token);
    console.log(decoded);
  };

  useEffect(() => {
    if (window) {
      setReadyState(true);

      const lst = JSON.parse(localStorage.getItem("alvesharp"));
      if (lst) {
        handleJWT(lst);
      } else {
        setAuth(false);
      }
      setLoading(false);
    }
  }, []);
  return (
    <>
      {ready && loading && <Center h="100vh">Loading...</Center>}

      {ready && !loading && <Login setAuth={setAuth} />}

      {auth && !loading && (
        <Box>
          <WrapContent>logged in</WrapContent>
        </Box>
      )}
    </>
  );
}
