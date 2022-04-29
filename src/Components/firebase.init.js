import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZRN2HpmHO5Plb-KkJygB_HJT9tKCmazc",
  authDomain: "assignment-11-c3aa0.firebaseapp.com",
  projectId: "assignment-11-c3aa0",
  storageBucket: "assignment-11-c3aa0.appspot.com",
  messagingSenderId: "237879079181",
  appId: "1:237879079181:web:518f80d3824bfc1b278044"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;