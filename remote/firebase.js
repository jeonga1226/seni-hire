import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_KEY,
  authDomain: "senihire.firebaseapp.com",
  projectId: "senihire",
  storageBucket: "senihire.appspot.com",
  messagingSenderId: "551355101417",
  appId: "1:551355101417:web:3a8cf12739ab04a70d8078",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
