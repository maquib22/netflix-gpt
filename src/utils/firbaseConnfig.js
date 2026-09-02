// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2_JZvxntke19HOcF2nNdwNKBWcID--3k",
  authDomain: "netflixgpt-4c65d.firebaseapp.com",
  projectId: "netflixgpt-4c65d",
  storageBucket: "netflixgpt-4c65d.firebasestorage.app",
  messagingSenderId: "406836297397",
  appId: "1:406836297397:web:3c985542145ff5ba9508fc",
  measurementId: "G-E3W9GRWNTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);