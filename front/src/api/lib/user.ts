import { apiClient } from '../apiClient';
import { IUserWatch, IUserList, IPriceData } from '../../../../types';
import { db } from '../../App';
import { collection, doc, getDocs, setDoc, getDoc } from 'firebase/firestore';

/**
 * Get User's watch collection
 * @returns an array of the user's watches
 */
export async function getUserWatches(): Promise<IUserWatch[]> {
  const response = await apiClient.get<IUserWatch[]>('/api/user/collection');
  return response.data;
}
/**
 * Get User's watch collection value
 * @returns sum of all the user's watch price datas
 */
export async function getTotalValue(): Promise<IPriceData[]> {
  const userWatches = await getUserWatches();
  /* Sum the prices of the user's watches for that day */
  const map = new Map<number, IPriceData>();
  for (const uw of userWatches) {
    for (const pd of uw.watch.priceData) {
      const date = new Date(pd.date);
      const price = pd.price * uw.numberOfWatches;
      const oldPrice = map.get(date.getTime());
      map.set(date.getTime(), {
        date,
        price: price + (oldPrice !== undefined ? oldPrice.price : 0),
      });
    }
  }
  /* Extract all the PriceData objs */
  const priceDataSum: IPriceData[] = [];
  map.forEach((value) => {
    priceDataSum.push(value);
  });

  return priceDataSum;
}
/**
 * Get User's watch lists
 * @returns an array of list watches
 */
export async function getUserLists(): Promise<IUserList[]> {
  const response = await apiClient.get<IUserList[]>('/api/user/lists');
  return response.data;
}

/**
 * Save user's email in firebase
 */
export async function addToWaitlist(email: string) {
  if (!email || email === '') {
    throw Error('Email is required!');
  }

  if ((await getDoc(doc(db, 'waitlist', email))).exists()) {
    throw Error('Email already exists.');
  }

  try {
    await setDoc(doc(db, 'waitlist', email), {
      queuePos: (await getDocs(collection(db, 'waitlist'))).size + 1,
    });
  } catch (e) {
    throw Error('Error adding email.');
  }
}
