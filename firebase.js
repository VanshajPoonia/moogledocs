import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyF9QMyV0c7hv7DbRJHXy4v7jWS-g-cvo",
  authDomain: "docs-d2df7.firebaseapp.com",
  projectId: "docs-d2df7",
  storageBucket: "docs-d2df7.appspot.com",
  messagingSenderId: "622977720008",
  appId: "1:622977720008:web:7e4ea0e7ed494c43f78ffd",
  measurementId: "G-MQWM95EDSR",
};
// const firebaseConfig = {
//     apiKey: "AIzaSyARcj4OCzA9X7jFzgvPAw_2SrfIi4BCAp8",
//     authDomain: "docs-clone-2b443.firebaseapp.com",
//     projectId: "docs-clone-2b443",
//     storageBucket: "docs-clone-2b443.appspot.com",
//     messagingSenderId: "36817195907",
//     appId: "1:36817195907:web:c996a45e17bcf7d98b1cb6",
//     measurementId: "G-0DCKYTBE4S"
//   };

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
