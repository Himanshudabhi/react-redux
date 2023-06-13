// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhcgDT1hDnv0oZa_4RROFKA7kOR02uDi0",
  authDomain: "fir-2af0b.firebaseapp.com",
  projectId: "fir-2af0b",
  storageBucket: "fir-2af0b.appspot.com",
  messagingSenderId: "567436821656",
  appId: "1:567436821656:web:d1942c8e5e049e33813ced",
  measurementId: "G-F5PCE8FQ2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { auth , app };
// const analytics = getAnalytics(app);