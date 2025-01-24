import { createContext, useEffect, useState } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic()
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
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

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const firebaseDeleteUser = (user) => {
    return deleteUser(auth.currentUser).then(() => {
      return true;
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
      
        const userInfo = { email: currentUser.email };
        axiosPublic.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
    }
    else {
       
        localStorage.removeItem('access-token');
        setLoading(false);
    }
 
    });

    return () => unSubscribe();
  }, [axiosPublic]);

  const userInfo = {
    user,
    loading,
    setUser,
    createUser,
    signIn,
    logout,
    setLoading,
    handleGoogleLogin,
    updateUserProfile,
    firebaseDeleteUser,
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
