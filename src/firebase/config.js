import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCBuhHaVbhAE_O7zs0lQj3rDBcTB0LmHXY",
    authDomain: "olx-demo-5294b.firebaseapp.com",
    projectId: "olx-demo-5294b",
    storageBucket: "olx-demo-5294b.appspot.com",
    messagingSenderId: "268917770675",
    appId: "1:268917770675:web:f24321938e639fae7ea3c6",
    measurementId: "G-R8GGX4LPSW"
  };

 export default  firebase.initializeApp(firebaseConfig)