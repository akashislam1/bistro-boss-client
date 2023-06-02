import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out user
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  // update user profile
  const updateUserProfile = (currentUser, name, photo) => {
    setLoading(true);
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      if (currentUser && currentUser?.email) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser?.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAlert = () => {
    if (!user) {
      return Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "“You have to log in first to view details” !!",
      });
    }
  };
  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleLogin,
    handleAlert,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
