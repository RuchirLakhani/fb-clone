// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKJocjCUYQlbCeTzk7r5gMQWt5yXfZptM",
    authDomain: "fb-clone-3a59f.firebaseapp.com",
    databaseURL: "https://fb-clone-3a59f.firebaseio.com",
    projectId: "fb-clone-3a59f",
    storageBucket: "fb-clone-3a59f.appspot.com",
    messagingSenderId: "808982423732",
    appId: "1:808982423732:web:1051be0545a40f83d90fe1",
    measurementId: "G-KKNH40J26K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;