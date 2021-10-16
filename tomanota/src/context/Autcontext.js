import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Authcontext = createContext();

export const useAuth = () => useContext(Authcontext);

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => signOut(auth);
 
  const value = { signUp, login, logout, currentUser };

  return (
    <Authcontext.Provider value={value}>{props.children}</Authcontext.Provider>
  );
};
