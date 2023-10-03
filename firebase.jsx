// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxfoSCwp7-15G2KtYn5AwAv93nmT3Kmu8",
  authDomain: "twitterclone-ad02c.firebaseapp.com",
  projectId: "twitterclone-ad02c",
  storageBucket: "twitterclone-ad02c.appspot.com",
  messagingSenderId: "1061856908697",
  appId: "1:1061856908697:web:c2e7e2937cd790d503ef08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()