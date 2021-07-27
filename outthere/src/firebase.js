import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6iowBPSENODC65W4HTuPJafXcbvFrIWw",
    authDomain: "outtheredb.firebaseapp.com",
    projectId: "outtheredb",
    storageBucket: "outtheredb.appspot.com",
    messagingSenderId: "195075985086",
    appId: "1:195075985086:web:29505ac47c32a11a0698ef",
    measurementId: "G-2BJ1WGH7FF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;