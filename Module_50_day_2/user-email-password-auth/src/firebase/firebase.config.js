// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrHweS2Cr-SuHZm8Dp8Iw_Mk7lJ30dskE",
  authDomain: "user-email-password-auth-bcd21.firebaseapp.com",
  projectId: "user-email-password-auth-bcd21",
  storageBucket: "user-email-password-auth-bcd21.appspot.com",
  messagingSenderId: "409737324732",
  appId: "1:409737324732:web:5d3c752e487295623608b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;