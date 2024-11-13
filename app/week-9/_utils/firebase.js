// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase

// Your Firebase configuration (replace these values with your Firebase project's config)
const firebaseConfig = {
  apiKey: "AIzaSyAGE0VkGzP82FQ7sVkY2zRooIMQxRgX268",
  authDomain: "cprg306-assignments-f8eb8.firebaseapp.com",
  projectId: "cprg306-assignments-f8eb8",
  storageBucket: "cprg306-assignments-f8eb8.firebasestorage.app",
  messagingSenderId: "622506284272",
  appId: "1:622506284272:web:99ef0ca7a52b5fe1ba1e35",
  measurementId: "G-M03NBZE08D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
