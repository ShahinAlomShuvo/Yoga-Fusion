// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCh2yGeeGykmCQbW57yPEBZOjis6o6_9A",
  authDomain: "yogafusion-4a06d.firebaseapp.com",
  projectId: "yogafusion-4a06d",
  storageBucket: "yogafusion-4a06d.appspot.com",
  messagingSenderId: "373631020791",
  appId: "1:373631020791:web:ed148775b1aa734f2fadf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
