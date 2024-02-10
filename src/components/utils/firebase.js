import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {firebaseConfig} from './firebase.config.js'

const firebaseConfig = {
  apiKey: "AIzaSyBAjwUEJB1ek6SIlLPOJbS2_BPB4wjVQbw",
  authDomain: "my-profile-aaad6.firebaseapp.com",
  projectId: "my-profile-aaad6",
  storageBucket: "my-profile-aaad6.appspot.com",
  messagingSenderId: "218757697403",
  appId: "1:218757697403:web:547aac9aaee4b24c42b7de",
  measurementId: "G-VQY471KE9P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
