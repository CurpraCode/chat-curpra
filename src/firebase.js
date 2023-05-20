import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqK16NvDIROmQ1EIi5_laEDmJzYbr6LK0",
  authDomain: "chatapp-65a2e.firebaseapp.com",
  projectId: "chatapp-65a2e",
  storageBucket: "chatapp-65a2e.appspot.com",
  messagingSenderId: "109533054694",
  appId: "1:109533054694:web:12a154515a1b0895df5d27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
