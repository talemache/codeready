import { useSyncExternalStore, useCallback } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  type User,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

type AuthState = {
  user: User | null;
  loading: boolean;
};

let state: AuthState = { user: null, loading: true };
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

// Initialize the auth state listener once at module level
if (auth) {
  onAuthStateChanged(auth, (user) => {
    state = { user, loading: false };
    notify();
  });
} else {
  // No Firebase config (e.g. test env) — set loading to false immediately
  state = { user: null, loading: false };
}

function getSnapshot(): AuthState {
  return state;
}

function getServerSnapshot(): AuthState {
  return { user: null, loading: false };
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

async function ensureUserDoc(user: User) {
  const ref = doc(db, "users", user.uid);
  await setDoc(
    ref,
    {
      email: user.email,
      displayName: user.displayName ?? null,
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
}

const googleProvider = new GoogleAuthProvider();

export function useAuth() {
  const { user, loading } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await ensureUserDoc(cred.user);
    return cred.user;
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await ensureUserDoc(cred.user);
    return cred.user;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const cred = await signInWithPopup(auth, googleProvider);
    await ensureUserDoc(cred.user);
    return cred.user;
  }, []);

  const signOut = useCallback(() => firebaseSignOut(auth), []);

  return { user, loading, signUpWithEmail, signInWithEmail, signInWithGoogle, signOut };
}
