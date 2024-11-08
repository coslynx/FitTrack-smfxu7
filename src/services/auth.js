import firebase from 'firebase/app'; // Version 11.0.1
import 'firebase/auth';

const register = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Registration Error:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.error('Logout Error:', error);
    throw error;
  }
};

const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export { register, login, logout, getCurrentUser };