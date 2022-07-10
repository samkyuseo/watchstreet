import { IPriceData, ITimeDelta } from '../../../types';
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
/**
 * Add commas if applicable and two decimals
 * @param num
 * @returns formatted number XXXX.XX
 */
export function formatTwoDecimals(num: number): string {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/**
 * Calculates price from latest price given the some data and the time delta
 * @param data
 * @param td a number or ITimeDelta object
 * @returns amount changed in the time period
 */
export function calculatePriceChange(
  data: IPriceData[],
  td: ITimeDelta | number
): number {
  let numDays = typeof td === 'number' ? td : td.numDays;

  if (numDays === Infinity) {
    return data[data.length - 1].price - data[0].price;
  }
  // priceChange = priceToday - priceXDaysAgo
  const priceToday = data[data.length - 1].price;
  const priceXDaysAgo = data[data.length - numDays].price;
  return priceToday - priceXDaysAgo;
}

/**
 * Calculates change percent from latest price given the some data and the time delta
 * @param data
 * @param td a number or ITimeDelta object
 * @returns amount changed in the time period
 */
export function calculatePriceChangePerent(
  data: IPriceData[],
  td: ITimeDelta | number
): number {
  let numDays = typeof td === 'number' ? td : td.numDays;

  if (numDays === Infinity) {
    return data[data.length - 1].price - data[0].price;
  }
  // priceChange = priceToday - priceXDaysAgo
  const priceToday = data[data.length - 1].price;
  const priceXDaysAgo = data[data.length - numDays].price;

  const priceChange = priceToday - priceXDaysAgo;
  return (priceChange / data[data.length - 1].price) * 100;
}

/**
 * Creates a string describing price change
 * @param data
 * @param priceChange
 * @returns a string in the form of +/-$XXXX.XX(+/-XX.XX%)
 */
export function formatPriceChangeString(
  data: IPriceData[],
  priceChange: number
): string {
  const neatPercentPriceChange = formatTwoDecimals(
    (priceChange / data[data.length - 1].price) * 100
  );
  const neatPriceChange = formatTwoDecimals(priceChange);
  const sign = priceChange < 0 ? '-' : '+';
  let formatted = `${sign + neatPriceChange} (${
    sign + neatPercentPriceChange
  }%)`;

  return formatted;
}

/**
 * Crates a string describing price change percent
 * @param data
 * @param priceChange
 * @returns a string in the form of +/-XX.XX%
 */
export function formatPriceChangePercent(
  data: IPriceData[],
  priceChange: number
): string {
  const neatPercentPriceChange = formatTwoDecimals(
    (priceChange / data[data.length - 1].price) * 100
  );
  const sign = priceChange < 0 ? '-' : '+';

  let formatted = `${sign + neatPercentPriceChange}%`;
  return formatted;
}

/**
 * Get latest price of watch
 * @param data
 * @returns latest price of watch
 */
export function getLatestPrice(data: IPriceData[]): number {
  return data[data.length - 1].price;
}
/**
 * Get latest date of watch
 * @param data
 * @returns latest price of watch
 */
export function getLatestDate(data: IPriceData[]): Date {
  return data[data.length - 1].date;
}
