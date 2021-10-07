import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTLZhxqEzbX0napv5Va-vfSYzwZuXFs8U",
    authDomain: "tekky-efb69.firebaseapp.com",
    projectId: "tekky-efb69",
    storageBucket: "tekky-efb69.appspot.com",
    messagingSenderId: "468928569104",
    appId: "1:468928569104:web:96368b69e3f19d0b500f95",
    measurementId: "G-Q0KQ0RSW7W"
  }

  const app = firebase.initializeApp(firebaseConfig)

  export const firestore = firebase.firestore(app)