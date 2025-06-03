// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFEKylDK2-dmYq4vENoM4J_jb9LUKcIlU",
  authDomain: "hotel-booking-platform-48b83.firebaseapp.com",
  projectId: "hotel-booking-platform-48b83",
  storageBucket: "hotel-booking-platform-48b83.firebasestorage.app",
  messagingSenderId: "10339161047",
  appId: "1:10339161047:web:1cabab81014fb0c4ebb192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);