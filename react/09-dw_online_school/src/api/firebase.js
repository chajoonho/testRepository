import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa6QcwZq0vJBjMhGeqzoJdN6mx-13FHpc",
  authDomain: "dwos-50e00.firebaseapp.com",
  projectId: "dwos-50e00",
  storageBucket: "dwos-50e00.appspot.com",
  messagingSenderId: "678724955735",
  appId: "1:678724955735:web:5d7ea30c03db12a7b33d12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const result = await collection(db, collectionName);
  const collect = await getDocs(result);
  const resultData = collect.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  //   console.log(resultData);
  return resultData;
}

export { getDatas, db };
