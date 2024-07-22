import firebase from 'firebase/app';
import 'firebase/firestore';

// Konfigurace Firebase
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGEBUCKET",
  messagingSenderId: "YOUR messagingSenderId:",
  appId: "YOUR-APP-ID"
};

// Inicializace Firebase
firebase.initializeApp(firebaseConfig);

// Inicializace Firestore
const projectFirestore = firebase.firestore();

// Export instance Firestore
export { projectFirestore };
