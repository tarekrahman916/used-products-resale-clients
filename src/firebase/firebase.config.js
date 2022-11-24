// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyByEYztqoosltFn18hqkm-Kna1dFVIeI90",
  //   authDomain: "laptop-store-ed7de.firebaseapp.com",
  //   projectId: "laptop-store-ed7de",
  //   storageBucket: "laptop-store-ed7de.appspot.com",
  //   messagingSenderId: "452975554339",
  //   appId: "1:452975554339:web:530fb9957e99b125c8e696",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
