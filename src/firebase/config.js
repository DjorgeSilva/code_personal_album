
import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA9KDwjrne0dSuvqRX87HuSjsEKe9N2LdE",
    authDomain: "gallery-website-d9cd5.firebaseapp.com",
    projectId: "gallery-website-d9cd5",
    storageBucket: "gallery-website-d9cd5.appspot.com",
    messagingSenderId: "506563991016",
    appId: "1:506563991016:web:706f65ca60bc180d1b005d",
    measurementId: "G-FFEWBHX7DC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timeStamp}
  