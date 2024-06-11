const firebaseConfig = {
  apiKey: "AIzaSyBkG-siFj9Egphst4f50AH40t-zZ0PVNAU",
  authDomain: "myproject-d5035.firebaseapp.com",
  projectId: "myproject-d5035",
  storageBucket: "myproject-d5035.appspot.com",
  messagingSenderId: "562394154582",
  appId: "1:562394154582:web:fe1c1633caa548cb215df7",
  measurementId: "G-L8E4XS1JW2",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function getDatas(collectionName) {
  const querySnapshot = await db.collection(collectionName).get();
  return querySnapshot;
}

async function addDatas(collectionName, addObj) {
  const result = await db.collection(collectionName).add(addObj);
  return result;
}

async function deleteDatas(collectionName, docId) {
  try {
    await db.collection(collectionName).doc(docId).delete();
    return true;
  } catch (error) {
    return false;
  }
}

async function updateDatas(collectionName, docId, updateObj) {
  await db.collection(collectionName).doc(docId).update(updateObj);
}
