import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnmKlH1Z_FtKnxCCw6-mkSxfyf0Lf5YkM",
  authDomain: "skillup-258.firebaseapp.com",
  projectId: "skillup-258",
  storageBucket: "skillup-258.appspot.com",
  messagingSenderId: "138974105493",
  appId: "1:138974105493:web:8ab2d67bcfe34121e8b09c",
  measurementId: "G-YJ9SCL1G0E"
};


const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;