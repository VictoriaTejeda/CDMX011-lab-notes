import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCyS--3Z8pMUvkJnZyQYpEWCEVygGTs32k",
    authDomain: "tomanota-f8cf9.firebaseapp.com",
    projectId: "tomanota-f8cf9",
    storageBucket: "tomanota-f8cf9.appspot.com",
    messagingSenderId: "494304034632",
    appId: "1:494304034632:web:fe5f6b29682bdb50963d7d",
    measurementId: "G-VGT745KF4N"
  };

 initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();

export default firebaseConfig
