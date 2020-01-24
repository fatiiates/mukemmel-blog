import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4KblFL0NgCjWZe9S3VSKN8oX18T39MUE",
    authDomain: "mytestproject-b19dd.firebaseapp.com",
    databaseURL: "https://mytestproject-b19dd.firebaseio.com",
    projectId: "mytestproject-b19dd",
    storageBucket: "mytestproject-b19dd.appspot.com",
    messagingSenderId: "989844642813",
    appId: "1:989844642813:web:784d108210017e4c73d794",
    measurementId: "G-E9MH2YL3HF"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { firebase, storage as default };
