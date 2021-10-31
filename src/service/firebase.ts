import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import "firebase/app";
import "firebase/compat/firestore";
import "firebase/auth";

if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    })
}

export const db = firebase.firestore();
export const auth = getAuth();
onAuthStateChanged(auth, user => { console.log(user); });