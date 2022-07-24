import { apiClient } from '../apiClient';
import {
  IWatch,
  IPriceData,
  IWatchList,
  IWatchArticle,
  ISpecs,
  IAvgPrice,
} from '../../../../types';

/**
 * Returns watch object given id.
 * @param id of watch.
 * @returns watch specs object.
 */
export async function getSpecs(id: string): Promise<ISpecs> {
  const res = await apiClient.get<ISpecs>(`/api/watch/specs/${id}`);
  return res.data;
}
/**
 * Returns watch price data given id
 * @param id of watch
 * @return watch price data object
 */
export async function getAvgPrices(id: string): Promise<IAvgPrice[]> {
  const res = await apiClient.get<IAvgPrice[]>(`/api/watch/price/${id}`);
  return res.data;
}
/**
 * Returns fake price data given id
 * @param id of watch.
 * @returns watch price data object
 */
export async function getFakePriceData(id: string): Promise<IPriceData[]> {
  const res = await apiClient.get<IPriceData[]>(`/api/watch/price-fake/${id}`);
  return res.data;
}
/**
 * Get fake watch price data and specs
 * @param id
 * @returns fake watch watch data object
 */
export async function getWatch(id: string): Promise<IWatch> {
  const watch = {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/patek.jpg?alt=media',
    specs: {
      model: 'Nautilus 5711/1A-014',
      brand: 'Patek Phillipe',
      referenceNumber: '5711/1A-014',
      yearOfProduction: '2021',
      caseMaterial: 'Steel',
      braceletMaterial: 'Steel',
      description: `On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
      olive-green shade that is new to the Nautilus collection and which
      should delight lovers of this cult watch, an icon of sporting elegance.
      The highly recognizable design of the case, bezel and bracelet is
      enhanced by a subtle alternation between satinated and polished manual
      finishing. Inside this model water-resistant to 120m beats a
      self-winding caliber visible through a transparent sapphire crystal
      case-back.`,
    },
    priceData: getFakeWatchPriceData(),
  };
  return watch;
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
