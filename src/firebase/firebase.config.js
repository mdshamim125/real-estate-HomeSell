// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvMekZfd9iRO-I6-JqEEX86wokHAbtJLI",
  authDomain: "real-estate-f9608.firebaseapp.com",
  projectId: "real-estate-f9608",
  storageBucket: "real-estate-f9608.appspot.com",
  messagingSenderId: "909292131067",
  appId: "1:909292131067:web:520ed358f880984967565e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
