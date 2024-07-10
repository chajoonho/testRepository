import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsP3uvWs9_AtM890pLn98gmUN6Gfx8WXM",
  authDomain: "mbti-project-9f639.firebaseapp.com",
  projectId: "mbti-project-9f639",
  storageBucket: "mbti-project-9f639.appspot.com",
  messagingSenderId: "471398453849",
  appId: "1:471398453849:web:ccd101d15c386fc419d748",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getAllDatas(collectionName, order) {
  const collect = collection(db, collectionName);
  const q = query(collect, orderBy(order, "desc")); // desc : 내림차순
  const querySnapshot = await getDocs(q);
  const resultData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    docId: doc.id,
  }));
  return resultData;
  //   debugger;
}

export { getAllDatas };
