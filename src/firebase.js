import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtMjxzbwN5s_eTBJxNP_Kj7UicgL5f3OI",
  authDomain: "clone-de59d.firebaseapp.com",
  projectId: "clone-de59d",
  storageBucket: "clone-de59d.appspot.com",
  messagingSenderId: "200020950725",
  appId: "1:200020950725:web:370b4d5879ab7d5aee3aac",
  measurementId: "G-7HZZCJT68X"

});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

//export {db, auth}
export {auth}