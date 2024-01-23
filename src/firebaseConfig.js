import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtwJFFIpELwHifVINe6lqXgYC__0zHF_Y",
  authDomain: "project-weartech.firebaseapp.com",
  projectId: "project-weartech",
  storageBucket: "project-weartech.appspot.com",
  messagingSenderId: "557596920676",
  appId: "1:557596920676:web:e2c405108225be02260871",
  measurementId: "G-DPYYVZG18G"
};

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);
const analytics = getAnalytics(app);