import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBc-5RgaSYT8Z0eNR1T0qMxFwMApQSn7q8",
    authDomain: "chainy-link.firebaseapp.com",
    projectId: "chainy-link",
    storageBucket: "chainy-link.appspot.com",
    messagingSenderId: "748687046154",
    appId: "1:748687046154:web:88e55ab26735715e1211f3",
    measurementId: "G-7FXPQE0N2S"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });