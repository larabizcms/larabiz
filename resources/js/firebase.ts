// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);

export default app;
