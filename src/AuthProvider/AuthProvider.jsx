import React, { createContext } from "react";
import useHook from "../useHook/useHook";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { stateData, loading } = useHook();

  const authUser = { stateData, loading };

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
