import React, { useContext, createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthContext = createContext(null);

const useAuth = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); 

  const signIn = async (email, password) => {
    try {
      setIsLoading(true); 
      await firebase.auth().signInWithEmailAndPassword(email, password); 
      setIsAuthenticated(true); 
    } catch (error) {
      console.error('Error signing in:', error); 
      // Handle the error, e.g., display an error message to the user
    } finally {
      setIsLoading(false); 
    }
  };

  const signUp = async (email, password) => {
    try {
      setIsLoading(true); 
      await firebase.auth().createUserWithEmailAndPassword(email, password); 
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error signing up:', error); 
      // Handle the error, e.g., display an error message to the user
    } finally {
      setIsLoading(false); 
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error signing out:', error); 
      // Handle the error, e.g., display an error message to the user
    }
  };

  const isAuthenticated = () => {
    return !!user; 
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser); 
        setIsAuthenticated(true); 
      } else {
        setUser(null); 
        setIsAuthenticated(false); 
      }
      setIsLoading(false); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signUp,
    signOut,
  };
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };