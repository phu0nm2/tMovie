// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvmtQ7fU5kEoOhP99W9cMqS3jUPhZoIs",
  authDomain: "tmovie-b2287.firebaseapp.com",
  projectId: "tmovie-b2287",
  storageBucket: "tmovie-b2287.appspot.com",
  messagingSenderId: "53384168838",
  appId: "1:53384168838:web:6df2325f54eaadaca59807",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
