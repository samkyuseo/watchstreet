import { apiClient } from '../apiClient';
import { getFakeWatchPriceData } from '../../functions/price';
import {
  IWatch,
  IPriceData,
  IWatchList,
  IWatchArticle,
  ISpecs,
  IAvgPrice,
  IPrice,
} from '../../types';
import { watchListDB, articleDB } from '../mockDB';
import { db } from '../../App';
import { doc, getDoc } from 'firebase/firestore';

/**
 * Returns watch object given id.
 * @param id of watch.
 * @returns watch specs object.
 */
export async function getSpecs(id: string): Promise<ISpecs> {
  try {
    const docRef = await getDoc(doc(db, 'watches', id));
    if (!docRef.exists()) {
      throw Error(`Watch with id ${id} doesn't exist.`);
    }
    const data = docRef.data();
    return data as ISpecs;
  } catch (error: any) {
    throw Error(error.message);
  }
}
/**
 * Returns watch price data given id
 * @param id of watch
 * @return watch price data object
 */
export async function getAvgPrices(id: string): Promise<IAvgPrice[]> {
  try {
    const docRef = await getDoc(doc(db, 'prices', id));
    if (!docRef.exists()) {
      throw Error(`Price with id ${id} doesn't exist.`);
    }
    const rawData = docRef.data() as { [key: string]: IPrice[] };
    const resData: IAvgPrice[] = [];
    for (const [date, priceObjs] of Object.entries<IPrice[]>(rawData)) {
      const sum = Array.from(priceObjs, (priceObj) => priceObj.price).reduce(
        (prev, curr) => prev + curr,
      );
      const avg = sum / priceObjs.length;
      resData.push({ price: avg, date: date, prices: priceObjs });
    }
    resData.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    return resData;
  } catch (error: any) {
    throw Error(error.message);
  }
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
 * @returns fake watch watch data object
 */
export async function getWatch(): Promise<IWatch> {
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
  return watchListDB;
}

export async function getTrendingList(id: string): Promise<IWatchList | undefined> {
  return watchListDB.find((watchList) => watchList.id === id);
}

export async function getArticles(): Promise<IWatchArticle[]> {
  return articleDB;
}
