import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

/**
 * Log user in using google auth provider
 */
async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}
/**
 * Log user out
 */
async function signOutFromGoogle() {
  await signOut(getAuth());
}

export { signOutFromGoogle, signInWithGoogle };
