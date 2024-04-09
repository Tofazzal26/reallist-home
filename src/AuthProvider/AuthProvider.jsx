import React, { createContext, useEffect, useState } from "react";
import useHook from "../useHook/useHook";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "./../FireBase/Firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { stateData, loading } = useHook();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authUser = {
    stateData,
    loading,
    createUser,
    logInEmailPassword,
    logOut,
    user,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
