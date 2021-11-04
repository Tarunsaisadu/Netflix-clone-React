import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhtQj5lF0XmGv0MRaHUDoDl-Uu44szt6I",
  authDomain: "netflix-clone-1138e.firebaseapp.com",
  projectId: "netflix-clone-1138e",
  storageBucket: "netflix-clone-1138e.appspot.com",
  messagingSenderId: "723253003671",
  appId: "1:723253003671:web:14f0009ffc925986fc70d2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
