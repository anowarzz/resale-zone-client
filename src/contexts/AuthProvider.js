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

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setAllUsers] = useState([]) 


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


// loading user from database
useEffect(() => {
if(user){
  fetch(`http://localhost:5000/users?email=${user?.email}`)
  .then((res) => res.json())
  .then((data) => setAllUsers(data));
}
}, [user?.email]);

console.log(users);



// Sending context value 
  const authInfo = { user, setUser, loading, setLoading, createUser, signIn ,googleLogIn, updateUser, logOut, users
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
