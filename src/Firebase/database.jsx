import firebase from 'firebase/app';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

// Inicializace Firestore
const projectFirestore = firebase.firestore();

// Export instance Firestore
export { projectFirestore };