
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtBZpveyLpUUe1lQmPuAkN6N-tQ9kk1eE",
  authDomain: "react-netflix-project-58c52.firebaseapp.com",
  projectId: "react-netflix-project-58c52",
  storageBucket: "react-netflix-project-58c52.appspot.com",
  messagingSenderId: "733980571299",
  appId: "1:733980571299:web:1af2396fecb40e1070f116",
  measurementId: "G-SSM2XJGZD6"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
