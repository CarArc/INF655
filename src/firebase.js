import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

function hasRequiredKeys() {
  return (
    typeof firebaseConfig.apiKey === 'string' &&
    firebaseConfig.apiKey.trim() !== '' &&
    typeof firebaseConfig.projectId === 'string' &&
    firebaseConfig.projectId.trim() !== ''
  );
}

export const isFirebaseConfigured = hasRequiredKeys();

let firebaseInitError = null;
let app;
/** @type {import('firebase/auth').Auth | null} */
let auth = null;
/** @type {import('firebase/firestore').Firestore | null} */
let db = null;

if (isFirebaseConfigured) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (err) {
    firebaseInitError = err instanceof Error ? err.message : String(err);
  }
}

export { auth, db, firebaseInitError };
