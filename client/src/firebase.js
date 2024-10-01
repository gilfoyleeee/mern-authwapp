// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c03de.firebaseapp.com",
  projectId: "mern-auth-c03de",
  storageBucket: "mern-auth-c03de.appspot.com",
  messagingSenderId: "290093977045",
  appId: "1:290093977045:web:b6e19000f68f41e191015c"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);