import { IUserWatch, IUserList, IPriceData } from '../../types';
import { db } from '../../App';
import { collection, doc, getDocs, setDoc, getDoc } from 'firebase/firestore';
import { userDB } from '../mockDB';

/**
 * Get User's watch collection
 * @returns an array of the user's watches
 */
export async function getUserWatches(): Promise<IUserWatch[] | undefined> {
  const user = userDB.find((user) => user.id === '0');
  if (user) {
    return user.userWatches;
  }
}
/**
 * Get User's watch collection value
 * @returns sum of all the user's watch price datas
 */
export async function getTotalValue(): Promise<IPriceData[] | undefined> {
  const userWatches = await getUserWatches();
  /* Sum the prices of the user's watches for that day */
  if (userWatches) {
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
