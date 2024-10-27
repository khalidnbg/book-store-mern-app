// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_AHyaO-7vXxwY1iRvuqnb_gXTb_MrMMc",
  authDomain: "book-stor-mern-app.firebaseapp.com",
  projectId: "book-stor-mern-app",
  storageBucket: "book-stor-mern-app.appspot.com",
  messagingSenderId: "662569675350",
  appId: "1:662569675350:web:902780a113521658a029f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
