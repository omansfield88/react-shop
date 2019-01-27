// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAB59M4Jsuf_iaFx08Wm6BGMRSHKFYSEzs",
  authDomain: "react-shop-251aa.firebaseapp.com",
  databaseURL: "https://react-shop-251aa.firebaseio.com",
  projectId: "react-shop-251aa",
  storageBucket: "react-shop-251aa.appspot.com",
  messagingSenderId: "236214347198"
};
firebase.initializeApp(config);
export default firebase;
