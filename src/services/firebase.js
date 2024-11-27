// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore for CRUD operations

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCImg_un9psQC_06MJVlRedwQoA_SrQyKI",
  authDomain: "notekepper-2497a.firebaseapp.com",
  projectId: "notekepper-2497a",
  storageBucket: "notekepper-2497a.appspot.com",
  messagingSenderId: "149377286568",
  appId: "1:149377286568:web:c35089a5e4057e04c19d9d",
  measurementId: "G-VBV772ZVKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
