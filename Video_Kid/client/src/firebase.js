import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr6fxf5iffhuILVND1eSf2EyApbCr2Pkk",
  authDomain: "video-c3522.firebaseapp.com",
  projectId: "video-c3522",
  storageBucket: "video-c3522.appspot.com",
  messagingSenderId: "1012160550286",
  appId: "1:1012160550286:web:01937d9801805e822c00df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;