// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyCnP6HWDehPuR0PDbQeWPZG6Psbdpz0qSo",
    authDomain: "ecommerce-38f8a.firebaseapp.com",
    projectId: "ecommerce-38f8a",
    storageBucket: "ecommerce-38f8a.appspot.com",
    messagingSenderId: "46864258040",
    appId: "1:46864258040:web:d04f59faa6146d82e17c0d",
    measurementId: "G-VHRDNJNXJW"
  };

let app = initializeApp(firebaseConfig);
export let db = getFirestore(app);
