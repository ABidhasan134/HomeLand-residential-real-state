
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.vITE_APIKEY,
  authDomain:import.meta.env.vITE_AUTHDOMAIN,
  projectId:import.meta.env.vITE_PROJECTID,
  storageBucket:import.meta.env.vITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.vITE_MESSAGINGSENDERID,
  appId:import.meta.env.vITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);