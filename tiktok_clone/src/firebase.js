import { initializeApp } from 'firebase/app';
import "firebase/compat/firestore"
import firebase from 'firebase/compat/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "tiktok-clone-c723c.firebaseapp.com",
  projectId: "tiktok-clone-c723c",
  storageBucket: "tiktok-clone-c723c.appspot.com",
  messagingSenderId: "903474984828",
  appId: "1:903474984828:web:a676a8632da7b75fa516f9",
  measurementId: "G-VQJ3SXDJTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
