import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMsw_KRC2iWVRDeT583uiZPT2yV03t7UE",
    authDomain: "minggu11-4d9f3.firebaseapp.com",
    projectId: "minggu11-4d9f3",
    storageBucket: "minggu11-4d9f3.appspot.com",
    messagingSenderId: "964102353411",
    appId: "1:964102353411:web:03d8766287344309015436",
    measurementId: "G-5YEC4HLVT5"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;