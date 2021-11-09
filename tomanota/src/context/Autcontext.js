import React, { createContext, useEffect, useState, useContext } from "react";


const Authcontext = createContext();

export const useAuth = () => useContext(Authcontext);

export const AuthProvider = ({ children, ...restProps }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    restProps.onAuthStateChanged(restProps.auth, (user) => {
      setCurrentUser(user);
    });
  }, [restProps]);

  const signUp = (email, password) => {
    return restProps.createUserWithEmailAndPassword(restProps.auth, email, password);
  };

  const login = (email, password) => {
    return restProps.signInWithEmailAndPassword(restProps.auth, email, password);
  };
  
  const logout = () => restProps.signOut(restProps.auth);
 
  const value = { signUp, login, logout, currentUser };

  return (
    <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
  );
};
