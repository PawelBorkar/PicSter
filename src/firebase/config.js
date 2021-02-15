import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDhrL8bL9n4lJ5k3Bs51QJvg9Z3wkaYxVY",
    authDomain: "picsterapp.firebaseapp.com",
    projectId: "picsterapp",
    storageBucket: "picsterapp.appspot.com",
    messagingSenderId: "523011256180",
    appId: "1:523011256180:web:23392819c2f1f18bd5c621",
    measurementId: "G-DXQK4JYF7N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
