import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCN-PRYW9YMueOT9Ae9rNoz7uX8aGzo2fA",
    authDomain: "netflix-597d6.firebaseapp.com",
    projectId: "netflix-597d6",
    storageBucket: "netflix-597d6.appspot.com",
    messagingSenderId: "449355932269",
    appId: "1:449355932269:web:7fdf3506510f44e06fd564"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});

  export { db };