import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkxspPGF8L9y11QGHUWXLgDMHTto89cBk",
  authDomain: "chatting-1fa97.firebaseapp.com",
  projectId: "chatting-1fa97",
  storageBucket: "chatting-1fa97.appspot.com",
  messagingSenderId: "310198876892",
  appId: "1:310198876892:web:d6c0496f9e5af31b081219",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function getCollection(collectionName) {
  return collection(db, collectionName);
}

function getUserAuth() {
  return auth;
}

export { getUserAuth };
