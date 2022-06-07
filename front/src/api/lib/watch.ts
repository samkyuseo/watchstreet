import { apiClient } from '../apiClient';
import { IWatch, IPriceData, IWatchList, IWatchArticle } from '../../types';

/**
 * Returns watch object given id.
 * @param id of watch.
 * @returns watch object.
 */
export async function getWatch(id: string): Promise<IWatch> {
  const res = await apiClient.get<IWatch>(`/api/watch/${id}`);
  return res.data;
}
/**
 * Get all trending lists
 * @returns a list of watch lists
 */
export async function getTrendingLists(): Promise<IWatchList[]> {
  const response = await apiClient.get<IWatchList[]>('/api/watch/list/all');
  return response.data;
}

export async function getTrendingList(id: string): Promise<IWatchList> {
  const response = await apiClient.get<IWatchList>(`/api/watch/list/${id}`);
  return response.data;
}

export async function getArticles(): Promise<IWatchArticle[]> {
  const response = await apiClient.get<IWatchArticle[]>(
    'api/watch/article/all'
  );
  return response.data;
}

/**
 * Utility function to generate fake watch price history data
 * @returns fake watch price data array
 */
export function getFakeWatchPriceData(): IPriceData[] {
  let startDate = new Date('12/24/2021');
  let startPrice = Math.floor(Math.random() * 200001); // random start price between 0 and $200,000

  let fakeData = Array.from({ length: 500 }, () => {
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    // randomly add or subtract but ensure a pos price
    if (Math.round(Math.random() * 1) === 1 || startPrice < 0) {
      startPrice += Math.floor(Math.random() * 10000) + 5000; // add amount between $10,000 and $5,000
    } else if (startPrice > 10000) {
      startPrice -= Math.floor(Math.random() * 10000) + 5000; // subtract ''
    }
    return { price: startPrice, date: startDate };
  });
  /* For some reason ^ adds an extra day at the end thats repeated... */
  return fakeData.slice(0, -1);
}
