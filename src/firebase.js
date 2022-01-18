import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCydI2qdHcAmctXSZRKFqrbFbfKJcZP9Ys",
    authDomain: "react-tailwind-discord-clone.firebaseapp.com",
    projectId: "react-tailwind-discord-clone",
    storageBucket: "react-tailwind-discord-clone.appspot.com",
    messagingSenderId: "431751704187",
    appId: "1:431751704187:web:d8afd4ed627cf779267cde",
    measurementId: "G-XMPR89SJJW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, auth, provider, db };
