// import { apiClient } from '../apiClient';

import { IWatch, IWatchPriceData } from '../../types';

/**
 * Returns watch object given id.
 * @param {string} id of watch.
 * @returns {Promise<IWatch>} watch object.
 */
async function getWatch(id: string): Promise<IWatch> {
  const fakeData: IWatch = {
    model: 'Nautilus 5711/1A-014',
    brand: 'Patek Phillipe',
    referenceNumber: '5711/1A-014',
    yearOfProduction: '2021',
    caseMaterial: 'Steel',
    description: '',
    priceHistory: getFakeWatchPriceHistory(),
  };
  // return apiClient.get(`/watch/${id}`);
  return fakeData;
}

/**
 * Utility function to generate fake watch price history data
 * @returns {IWatchPriceData[]} fake watch price data array
 */
function getFakeWatchPriceHistory(): IWatchPriceData[] {
  let startDate = new Date('12/24/2021');
  let startPrice = Math.floor(Math.random() * 200001); // random start price between 0 and $200,000
  return Array.from({ length: 500 }, () => {
    startDate.setDate(startDate.getDate() + 1);

    // randomly add or subtract but ensure a pos price
    if (Math.round(Math.random() * 1) === 1 || startPrice < 0) {
      startPrice += Math.floor(Math.random() * 10000) + 5000; // add amount between $10,000 and $5,000
    } else {
      startPrice -= Math.floor(Math.random() * 10000) + 5000; // subtract ''
    }
    return { price: startPrice, date: startDate };
  });
}

export { getWatch, getFakeWatchPriceHistory };
