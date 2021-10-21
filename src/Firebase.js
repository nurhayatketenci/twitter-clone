import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAwslK0NfFnBn0mPIjTK5L6sgXLu50NX3A",
  authDomain: "twitter-clone-e1ca0.firebaseapp.com",
  projectId: "twitter-clone-e1ca0",
  storageBucket: "twitter-clone-e1ca0.appspot.com",
  messagingSenderId: "519212505764",
  appId: "1:519212505764:web:4c1b5784cfbc9a49d52431",
  measurementId: "G-TDBDHXC79X",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
