// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlW_CbIM2iL13DFjzEjql_W7QSv74QlKo",
  authDomain: "coffee-master-452c3.firebaseapp.com",
  projectId: "coffee-master-452c3",
  storageBucket: "coffee-master-452c3.firebasestorage.app",
  messagingSenderId: "995805121335",
  appId: "1:995805121335:web:26bce6535a1916187428b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);