// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB6hwI05Gl9SrnKHh79c3oi73VYlRpdTM",
  authDomain: "projectat-7678f.firebaseapp.com",
  projectId: "projectat-7678f",
  storageBucket: "projectat-7678f.appspot.com",
  messagingSenderId: "633927579204",
  appId: "1:633927579204:web:cf3077e1f6a483ac3c6e11",
  measurementId: "G-S7D9PFY9C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
