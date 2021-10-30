import firebase from "firebase/app";
import 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDbeGmMLO_sGeZFvvEzcn6reHahTSpitSs",
  authDomain: "cervemark.firebaseapp.com",
  projectId: "cervemark",
  storageBucket: "cervemark.appspot.com",
  messagingSenderId: "372846838216",
  appId: "1:372846838216:web:49a6f13dccda0f4450c0fd"
};

const app = firebase.initializeApp(firebaseConfig)



export const getFirestore = () => {
  return firebase.firestore(app)
}