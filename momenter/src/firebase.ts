import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTThOA05FcAWAs9A_cZvGtXGgiLeWjpc8",
  authDomain: "momenter-32595.firebaseapp.com",
  projectId: "momenter-32595",
  storageBucket: "momenter-32595.appspot.com",
  messagingSenderId: "176958910556",
  appId: "1:176958910556:web:73a6bcafe28dd206b7f699",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
