import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Avoid re-initializing on hot-reload
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Guard: only call getAuth/getFirestore when a real API key is present.
// This prevents test environments (no env vars) from throwing auth/invalid-api-key.
const isConfigured = !!firebaseConfig.apiKey;

export const auth = isConfigured ? getAuth(app) : (null as unknown as ReturnType<typeof getAuth>);
export const db = isConfigured ? getFirestore(app) : (null as unknown as ReturnType<typeof getFirestore>);
