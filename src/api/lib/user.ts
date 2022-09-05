import { IUserList, IUser2, IAvgPrice, IUserWatch2, IPrice } from '../../types';
import { db } from '../../App';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { userDB } from '../mockDB';
import { signOutUser } from '../../functions/auth';

/**
 * Check if new user
 * @param userId
 */
export async function isNewUser(userId: string): Promise<boolean> {
  const docRef = await getDoc(doc(db, 'users', userId));
  if (!docRef.exists()) return true;
  else return false;
}

/**
 * Create user in user document collection
 * @param id
 */
export async function createUser(id: string) {
  try {
    /* Create user in firestore */
    await setDoc(doc(db, 'users', id), {
      collection: [
        {
          purchase_price: 10000,
          watch_ref: doc(db, 'watches', 'rolex-116500'),
          price_ref: doc(db, 'prices', 'rolex-116500'),
          id: uuidv4(),
        },
        {
          purchase_price: 10000,
          watch_ref: doc(db, 'watches', 'grand-seiko-sbgj251'),
          price_ref: doc(db, 'prices', 'grand-seiko-sbgj251'),
          id: uuidv4(),
        },
        {
          purchase_price: 10000,
          watch_ref: doc(db, 'watches', 'patek-philippe-7118a'),
          price_ref: doc(db, 'prices', 'patek-philippe-7118a'),
          id: uuidv4(),
        },
      ],
    });
  } catch (error: any) {
    await signOutUser();
    throw Error(error.message);
  }
}

/**
 * Get user's watches based on their id
 * @param id
 * @returns List of user's watches
 */
export async function getUser(id: string): Promise<IUser2> {
  try {
    const docRef = await getDoc(doc(db, 'users', id));
    if (!docRef.exists()) {
      throw Error("User doesn't exist.");
    }
    // Add the index in
    const userData = docRef.data() as IUser2;
    return userData;
  } catch (error: any) {
    await signOutUser();
    throw Error(error.message);
  }
}

/**
 * A function to sum avg prices in the user's collection and add them together
 * @param coll User's collection
 * @returns List of average prices
 */
export async function getCollSum(coll: IUserWatch2[]): Promise<IAvgPrice[]> {
  const rawPrices: { [key: string]: IPrice[] }[] = [];
  for (const c of coll) {
    const docRef = await getDoc(c.price_ref);
    if (!docRef.exists()) {
      throw Error(`Price with id ${c.price_ref.id} does not exist.`);
    }
    rawPrices.push(docRef.data() as { [key: string]: IPrice[] });
  }

  const map = new Map<string, { avg: IAvgPrice; numWatches: number }>();
  for (const rp of rawPrices) {
    for (const [date, rawPriceObjs] of Object.entries(rp)) {
      const sum = Array.from(rawPriceObjs, (rpo) => rpo.price).reduce((prev, curr) => prev + curr);
      const avg = sum / rawPriceObjs.length;
      const oldPrice = map.get(date);
      map.set(date, {
        avg: { date, price: avg + (oldPrice !== undefined ? oldPrice.avg.price : 0) },
        numWatches: 1 + (oldPrice !== undefined ? oldPrice.numWatches : 0),
      });
    }
  }
  const res: IAvgPrice[] = [];
  map.forEach((value) => {
    /* only dates that have all watches in it */
    if (value.numWatches === rawPrices.length) res.push(value.avg);
  });
  res.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return res;
}
/**
 * Add to collection
 * @param userId
 * @param watchId
 * @param purchasePrice
 */
export async function addToColl(userId: string, watchId: string, purchasePrice: number) {
  try {
    await updateDoc(doc(db, 'users', userId), {
      collection: arrayUnion({
        purchase_price: purchasePrice,
        watch_ref: doc(db, 'watches', watchId),
        price_ref: doc(db, 'prices', watchId),
        id: uuidv4(),
      }),
    });
  } catch (error: any) {
    throw Error(error.message);
  }
}

/**
 * Remove from collection
 * @param userId
 * @param watchId
 */
export async function removeFromColl(userId: string, watchId: string) {
  try {
    const docRef = await getDoc(doc(db, 'users', userId));
    if (!docRef.exists()) {
      throw Error("User doesn't exist.");
    }
    const updatedColl = (docRef.data() as IUser2).collection.filter((uw) => uw.id !== watchId);
    await updateDoc(doc(db, 'users', userId), {
      collection: updatedColl,
    });
  } catch (error: any) {
    throw Error(error.message);
  }
}

/**
 * Get User's watch lists
 * @returns an array of list watches
 */
export async function getUserLists(): Promise<IUserList[] | undefined> {
  const user = userDB.find((user) => user.id === '0');
  if (user) {
    return user.userLists;
  }
}

/**
 * Save user's email in firebase
 * @param email user's email
 */
export async function addToWaitlist(email: string) {
  try {
    if (!email || email === '') {
      throw Error('Email is required!');
    }
    if ((await getDoc(doc(db, 'waitlist', email))).exists()) {
      throw Error('Email already exists.');
    }
    await setDoc(doc(db, 'waitlist', email), {
      queuePos: (await getDocs(collection(db, 'waitlist'))).size + 1,
    });
  } catch (error: any) {
    throw Error(error.message);
  }
}
