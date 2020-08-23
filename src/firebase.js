import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBcbKsOpfgtUb3kDTs1eZXENNyZrE8f5LQ",
    authDomain: "tik-tok-clone-ddfbd.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-ddfbd.firebaseio.com",
    projectId: "tik-tok-clone-ddfbd",
    storageBucket: "tik-tok-clone-ddfbd.appspot.com",
    messagingSenderId: "212865575472",
    appId: "1:212865575472:web:e182253c7d2125d3235bf5",
    measurementId: "G-VL3G22DCZJ"
});
const db=firebaseApp.firestore();
export default db;