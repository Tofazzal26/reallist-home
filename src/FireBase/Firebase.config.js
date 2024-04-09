// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-eFGMuceGA80mxdxFdm5GujOCGj07Tk",
  authDomain: "reallist-authentication.firebaseapp.com",
  projectId: "reallist-authentication",
  storageBucket: "reallist-authentication.appspot.com",
  messagingSenderId: "1091286745567",
  appId: "1:1091286745567:web:4f7f485b99db23f2bcc46a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
