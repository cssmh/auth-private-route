// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7pAcjZ7zyrD5QcauDDhP3PFb4uGuvwo",
  authDomain: "auth-private-route-11b53.firebaseapp.com",
  projectId: "auth-private-route-11b53",
  storageBucket: "auth-private-route-11b53.appspot.com",
  messagingSenderId: "734589221411",
  appId: "1:734589221411:web:e9c506ea9e79c103fd8f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth