import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfR62dpILYQAKyPafWWlKFK0Rb-Ataa60",
  authDomain: "facebook-clone-61af5.firebaseapp.com",
  projectId: "facebook-clone-61af5",
  storageBucket: "facebook-clone-61af5.appspot.com",
  messagingSenderId: "737255520399",
  appId: "1:737255520399:web:43f87c45b3ee0e533758fa",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();


  export { db, storage}
