import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export const createAccount =(email,password)=>{ 
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user.displayName);
    console.log('bien')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log('Mal')
    // ..
  });
}

