import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkG-siFj9Egphst4f50AH40t-zZ0PVNAU",
  authDomain: "myproject-d5035.firebaseapp.com",
  projectId: "myproject-d5035",
  storageBucket: "myproject-d5035.appspot.com",
  messagingSenderId: "562394154582",
  appId: "1:562394154582:web:fe1c1633caa548cb215df7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMembers() {
  const collect = await collection(db, "member");
  const snapshot = await getDocs(collect);

  return snapshot;
}

export { db, getMembers };
