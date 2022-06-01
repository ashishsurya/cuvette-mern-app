// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAaNol_oEASemdgN6SO1qNCeWvi24sZ5o",
  authDomain: "cuvette-mern-app.firebaseapp.com",
  projectId: "cuvette-mern-app",
  storageBucket: "cuvette-mern-app.appspot.com",
  messagingSenderId: "792929878878",
  appId: "1:792929878878:web:25dad171bc9e87cf1145cf",
  measurementId: "G-4WM1RF7NED"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

