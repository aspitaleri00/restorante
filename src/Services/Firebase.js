import firebase from 'firebase/compat/app'

import "firebase/compat/firestore"
import "firebase/compat/auth"







const firebaseConfig = {
    apiKey: "AIzaSyC0uu3ZiTiI5oWqLq9koFKMszr8oarw7Xw",
    authDomain: "comida-76848.firebaseapp.com",
    projectId: "comida-76848",
    storageBucket: "comida-76848.appspot.com",
    messagingSenderId: "1018666090082",
    appId: "1:1018666090082:web:388bfa674954533d061b3b",
    measurementId: "G-RG8K1XG91N"
 };

 firebase.initializeApp(firebaseConfig)
 firebase.db = firebase.firestore()
 firebase.auth = firebase.auth()
 export default firebase;
   