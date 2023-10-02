// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzf4bfCnjsh6eMR6qR5sCrM4aW08SjEeg",
  authDomain: "auth-moha-milon-7eadf.firebaseapp.com",
  projectId: "auth-moha-milon-7eadf",
  storageBucket: "auth-moha-milon-7eadf.appspot.com",
  messagingSenderId: "11941038610",
  appId: "1:11941038610:web:c072befe670df1b27166cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
