// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZfDwiWj-huPyjUcPtBwLiSNwcL_pAvjQ",
  authDomain: "coffee-shop-70454.firebaseapp.com",
  projectId: "coffee-shop-70454",
  storageBucket: "coffee-shop-70454.appspot.com",
  messagingSenderId: "58444400244",
  appId: "1:58444400244:web:7b2dbd21809614c757f321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;