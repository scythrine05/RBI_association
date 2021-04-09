import React, { createContext, useState, useEffect } from "react";
import { authCheck } from "../axios/auth";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(1);
  // we will use loading later

  useEffect(() => {
    async function fetchAuth() {
      try {
        await authCheck();
        setAuth(1);
      } catch (e) {
        console.clear();
        setAuth(0);
      }
    }
    fetchAuth();
  }, []);

  const setAuthData = async (val) => {
    setAuth(val);
  };
  // a function that will help us to add the user data in the auth;

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
