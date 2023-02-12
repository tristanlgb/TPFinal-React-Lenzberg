// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBapKZDLdlzKpP5duBc53SU6pZ1aChBGkw",
  authDomain: "proyectofinalreact-25034.firebaseapp.com",
  projectId: "proyectofinalreact-25034",
  storageBucket: "proyectofinalreact-25034.appspot.com",
  messagingSenderId: "657920530734",
  appId: "1:657920530734:web:057484e6bab03f3e5282bf",
  measurementId: "G-21LW72Y543"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
