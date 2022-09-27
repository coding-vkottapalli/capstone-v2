import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ4w5Ifs7YR5l8qYo1rAUEbMfA7nKOzG0",
  authDomain: "e-commerce-clothing-db-ecfd5.firebaseapp.com",
  projectId: "e-commerce-clothing-db-ecfd5",
  storageBucket: "e-commerce-clothing-db-ecfd5.appspot.com",
  messagingSenderId: "131423480406",
  appId: "1:131423480406:web:700f7c8ff23ddfdc4ee9f7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters = {
  prompt: "select_account",
};
export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
