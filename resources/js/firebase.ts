// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyApZoTLVnb9RgBunedX_eyZHrDvyIiLaOg",
  authDomain: "larabiz-2fcf6.firebaseapp.com",
  projectId: "larabiz-2fcf6",
  storageBucket: "larabiz-2fcf6.appspot.com",
  messagingSenderId: "153937459263",
  appId: "1:153937459263:web:0e0b33ecde1e50486f608a",
  measurementId: "G-99WSZWDQNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);

export default app;
