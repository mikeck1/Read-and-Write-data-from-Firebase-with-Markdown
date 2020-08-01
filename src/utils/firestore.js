import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/storage"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAUOrZmB0hxdKAG_hp-A5M84mTmxVyqq8",
    authDomain: "mikekaufman-5107b.firebaseapp.com",
    databaseURL: "https://mikekaufman-5107b.firebaseio.com",
    projectId: "mikekaufman-5107b",
    storageBucket: "mikekaufman-5107b.appspot.com",
    messagingSenderId: "868167207886",
    appId: "1:868167207886:web:f07000a153eb54a62ab99f",
    measurementId: "G-DD91NXMSHJ"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);


export default db;