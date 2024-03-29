import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useRole from "../Hooks/useRole";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // Registering a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login A User
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login Using Google Account
  const googleLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Updating a user info in firebase
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Log Out A User
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


// User State Check
useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
console.log('Observing current user', currentUser);
setUser(currentUser)
setLoading(false)
    })
    return () => unSubscribe();
}, [])






// Sending context value 
  const authInfo = { user, setUser, loading, setLoading, createUser, signIn ,googleLogIn, updateUser, logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
