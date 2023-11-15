// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAa4aftUpcrr3LimJTuqFtCEA3mcr32NE",
  authDomain: "chat-app-45ede.firebaseapp.com",
  projectId: "chat-app-45ede",
  storageBucket: "chat-app-45ede.appspot.com",
  messagingSenderId: "1077911476509",
  appId: "1:1077911476509:web:275ce1b404795ea58529f4",
  measurementId: "G-PVN7JP0S1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);