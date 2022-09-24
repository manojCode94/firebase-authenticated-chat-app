import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyACTB0S-4x-YKpRoqtgAKgGO7BX0f6qneE",
  authDomain: "buddy-chat-323c5.firebaseapp.com",
  projectId: "buddy-chat-323c5",
  storageBucket: "buddy-chat-323c5.appspot.com",
  messagingSenderId: "1067521122117",
  appId: "1:1067521122117:web:2b8f82c0fea8835c33282c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
