import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqt8RIncmKIlvUAnq2D9rOCSZRFXPYrTA",
  authDomain: "locked-in-cbdad.firebaseapp.com",
  projectId: "locked-in-cbdad",
  storageBucket: "locked-in-cbdad.firebasestorage.app",
  messagingSenderId: "836738070924",
  appId: "1:836738070924:web:f781513cb6027ac9d43ea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);