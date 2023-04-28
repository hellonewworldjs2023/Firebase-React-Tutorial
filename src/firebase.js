import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDvgIx_SeKB6ct3Sv1UOxg5F9D7X49Uhc0",
  authDomain: "fir-react-tutorial-135fb.firebaseapp.com",
  projectId: "fir-react-tutorial-135fb",
  storageBucket: "fir-react-tutorial-135fb.appspot.com",
  messagingSenderId: "940972119232",
  appId: "1:940972119232:web:385e950d25df89c783c925"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;