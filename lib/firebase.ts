import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhmY0YBRbTIH133CcqJYeDGbUDmP440MI",
  authDomain: "aura-perfume.firebaseapp.com",
  projectId: "aura-perfume",
  storageBucket: "aura-perfume.firebasestorage.app",
  messagingSenderId: "680531518197",
  appId: "1:680531518197:web:5cc92dd739613d53e71bbc"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
