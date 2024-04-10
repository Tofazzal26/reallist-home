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
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { stateData, loading } = useHook();
  const [user, setUser] = useState(null);
  const [notLoading, setNotLoading] = useState(true);
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setNotLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const updateProfile = () => {};

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = () => {
    setNotLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = (email, password) => {
    setNotLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInEmailPassword = (email, password) => {
    setNotLoading(true);
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
    notLoading,
    setPhoto,
    photo,
  };
  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
