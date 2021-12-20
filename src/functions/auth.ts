import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

export async function signOutFromGoogle() {
  await signOut(getAuth());
}
