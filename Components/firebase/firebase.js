import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqafnYZyRuKxhTEsfg1gaSQ2N6p9pwS_U",
  authDomain: "auth-86847.firebaseapp.com",
  databaseURL: "https://auth-86847.firebaseio.com",
  projectId: "auth-86847",
  storageBucket: "auth-86847.appspot.com",
  messagingSenderId: "953040344962",
  appId: "1:953040344962:web:f22cfd26ea6e5c26bc219b"
};

// Initialize Firebase

var firedb = firebase.initializeApp(firebaseConfig);

export default firedb.database();
