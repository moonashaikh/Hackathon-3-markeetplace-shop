import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: "",

  apiKey: "AIzaSyBgZiBC5s4G4uNgv0175gx3_OYKZeAgH98",
  authDomain: "dummy-project-69449.firebaseapp.com",
  projectId: "dummy-project-69449",
  storageBucket: "dummy-project-69449.firebasestorage.app",
  messagingSenderId: "1009200226996",
  appId: "1:1009200226996:web:97e3588a15f29be9482de1",
  measurementId: "G-03Z0W0HH5T"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
