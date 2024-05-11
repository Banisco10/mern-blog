// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-72865.firebaseapp.com",
  projectId: "mern-blog-72865",
  storageBucket: "mern-blog-72865.appspot.com",
  messagingSenderId: "354075666240",
  appId: "1:354075666240:web:c996d5130d147fd2f57ca5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);