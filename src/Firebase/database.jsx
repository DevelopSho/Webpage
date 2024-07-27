// src/Firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Konfigurace Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMoHJZ4x_O69IorMH7qx3exGkJY8_hUs8",
  authDomain: "newsletter---sho.firebaseapp.com",
  projectId: "newsletter---sho",
  storageBucket: "newsletter---sho.appspot.com",
  messagingSenderId: "1038532280834",
  appId: "1:1038532280834:web:ae9bc5dafd8e94100ddd1b"
};

// Inicializace Firebase
const app = initializeApp(firebaseConfig);

// Inicializace Firestore
const projectFirestore = getFirestore(app);

// Export instance Firestore
export { projectFirestore };