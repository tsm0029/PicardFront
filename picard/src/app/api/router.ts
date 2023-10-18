// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCwOhpJ8PpM-_1-AvxAbKHGZL5qyuxQMk0",
  authDomain: "picard-8ec76.firebaseapp.com",
  projectId: "picard-8ec76",
  storageBucket: "picard-8ec76.appspot.com",
  messagingSenderId: "1060937711233",
  appId: "1:1060937711233:web:4d91949ad96b47e8c99780"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const initFirebase = () => {
  return app;
}