// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnmKlH1Z_FtKnxCCw6-mkSxfyf0Lf5YkM",
  authDomain: "skillup-258.firebaseapp.com",
  projectId: "skillup-258",
  storageBucket: "skillup-258.appspot.com",
  messagingSenderId: "138974105493",
  appId: "1:138974105493:web:8ab2d67bcfe34121e8b09c",
  measurementId: "G-YJ9SCL1G0E"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth};