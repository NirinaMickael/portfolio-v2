import firebase, { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDV5rjeQU15XZLDab7dCDycTMNYSZ072DQ",

  authDomain: "portfolio-2b4ba.firebaseapp.com",

  projectId: "portfolio-2b4ba",

  storageBucket: "portfolio-2b4ba.appspot.com",

  messagingSenderId: "498747928189",

  appId: "1:498747928189:web:e3c556880dfa3a7cd98b14",

  measurementId: "G-23J5VBD5P1",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}; 