// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBencEISAFYtVI5odfXMXjiMbmQ7zxqOMc',
	authDomain: 'a-l-ouest.firebaseapp.com',
	projectId: 'a-l-ouest',
	storageBucket: 'a-l-ouest.firebasestorage.app',
	messagingSenderId: '886098274891',
	appId: '1:886098274891:web:889db584037e72f8a63bce'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
