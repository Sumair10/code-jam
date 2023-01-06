// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrpgkent3pHPtL9gLVACihbs9IZ85w6w",
  authDomain: "code-jam-ddee8.firebaseapp.com",
  databaseURL: "https://code-jam-ddee8-default-rtdb.firebaseio.com",
  projectId: "code-jam-ddee8",
  storageBucket: "code-jam-ddee8.appspot.com",
  messagingSenderId: "1068882721579",
  appId: "1:1068882721579:web:363f9075e9a3811f0fe36e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;