import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "resume-ai-c40b3.firebaseapp.com",
    projectId: "resume-ai-c40b3",
    storageBucket: "resume-ai-c40b3.appspot.com",
    messagingSenderId: "978217752869",
    appId: "1:978217752869:web:0cede8303abc3a0dc5e2cc"
};
  
const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);

  