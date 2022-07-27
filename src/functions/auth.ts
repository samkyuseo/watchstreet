import { FirebaseError } from '@firebase/util';
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

/**
 * Create account with username and password
 * @param email
 * @param password
 */
export async function createUserWithEmail(email: string, password: string) {
  try {
    await createUserWithEmailAndPassword(getAuth(), email, password);
  } catch (_e: any) {
    const e = _e as FirebaseError;
    switch (e.code) {
      case 'auth/email-already-in-use':
        throw Error('Email is already in use.');
      default:
        throw Error('Server Error.');
    }
  }
}

/**
 * Login using google auth provider. If user doesn't exist, it creates a user
 */
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(getAuth(), provider);
}

/**
 * Login user with email and password
 * @param email
 * @param password
 */
export async function signInWithEmail(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password);
  } catch (_e: any) {
    const e = _e as FirebaseError;
    switch (e.code) {
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        throw Error('Invalid username or password.');
      default:
        throw Error('Server Error.');
    }
  }
}

/**
 * Log user out
 */
export async function signOutFromGoogle() {
  await signOut(getAuth());
}
