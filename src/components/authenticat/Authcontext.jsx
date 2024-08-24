import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../firebase/Auth'; // Adjust the path if needed

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const loginWithEmail = async (email, password) => {
    try {
      await doSignInWithEmailAndPassword(email, password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Email login failed:', error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await doSignInWithGoogle();
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await doSignOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginWithEmail, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
