import { apiClient } from '../apiClient';
import { IUserWatch, IUserList, IWatch, IPriceData } from '../../types';
import { getFakeWatchPriceData } from '../lib/watch';
import patek from '../../assets/images/patek.jpg';

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
  let map = new Map<number, IPriceData>();
  for (let uw of userWatches) {
    for (let pd of uw.watch.priceData) {
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
 * Save user's email
 * @returns message that it added to the waitlist
 */
export async function addToWaitlist(email: string) {
  await apiClient.post<string>('/api/user/waitlist', { email });
}
