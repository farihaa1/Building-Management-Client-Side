import { createContext, useEffect, useState } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    setUser,
    createUser,
    loginUser,
    logout,
    updateUserProfile,
    setLoading,
    handleGoogleLogin,
    handleGithubLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-ring text-blue-800 w-44 h-34"></span>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
