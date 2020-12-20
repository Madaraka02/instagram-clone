  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOLdXC2pvEqENsU3JMF0LjF1UpRXXti6Q",
    authDomain: "instagram-clone-b68b9.firebaseapp.com",
    databaseURL: "https://instagram-clone-b68b9.firebaseio.com",
    projectId: "instagram-clone-b68b9",
    storageBucket: "instagram-clone-b68b9.appspot.com",
    messagingSenderId: "762537121257",
    appId: "1:762537121257:web:042710d8077f73ca87a778",
    measurementId: "G-3N11PBZEJT"

  });
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage}