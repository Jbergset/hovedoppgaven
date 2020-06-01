import firebase from "firebase/app"
import "firebase/firestore"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBZnr2Bm7ckZBsoxbF-2eQ7QEt5nPPac6A",
    authDomain: "firestore-og-testing.firebaseapp.com",
    databaseURL: "https://firestore-og-testing.firebaseio.com",
    projectId: "firestore-og-testing",
    storageBucket: "firestore-og-testing.appspot.com",
    messagingSenderId: "984593263005",
    appId: "1:984593263005:web:33ddd81843fde05e696774"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()