// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5ETq0Lza31xY81NX_7YDghJVwe6BOZ3Y",
  authDomain: "mockinterview-e06fe.firebaseapp.com",
  projectId: "mockinterview-e06fe",
  storageBucket: "mockinterview-e06fe.firebasestorage.app",
  messagingSenderId: "677274301947",
  appId: "1:677274301947:web:be12b3f67c2aff6bcc475e",
  measurementId: "G-BLSRG0DQ8N"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// Only initialize analytics on the client since it accesses `window`
let analytics;
if (typeof window !== "undefined") {
  // getAnalytics will throw on the server because `window` is not defined
  analytics = getAnalytics(app);
}

export { analytics };
export const auth = getAuth(app);
export const db = getFirestore(app);