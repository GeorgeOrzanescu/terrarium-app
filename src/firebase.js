import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// NOT SECURE HERE BUT FOR THE PROJECT I WILL USE THIS

const firebaseConfig = {
  apiKey: "AIzaSyAaL3mv4zEqruO5q2j2y5VfYADMZwX6fAg",
  authDomain: "terrarium-f8a16.firebaseapp.com",
  projectId: "terrarium-f8a16",
  storageBucket: "terrarium-f8a16.appspot.com",
  messagingSenderId: "479274021918",
  appId: "1:479274021918:web:f48bad144fa01307c76a0f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
