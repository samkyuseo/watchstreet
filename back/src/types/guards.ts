import { FirebaseError } from 'firebase-admin';

/**
 * Type guard for firebase errors
 * @param error
 * @returns
 */
function isFirebaseError(error: unknown): error is FirebaseError {
  return (error as FirebaseError).code !== undefined;
}

export { isFirebaseError };
