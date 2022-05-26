import { IWatchPriceData, ITimeDelta } from '../types';
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
 * Calculates price from lates price change given the some data and the time delta
 * (overloaded)
 * @param data
 * @param td a number or ITimeDelta object
 * @returns amount changed in the time period
 */
export function calculatePriceChange(
  data: IWatchPriceData[],
  td: ITimeDelta | number
): number {
  let numDays = typeof td === 'number' ? td : td.numDays;

  if (numDays === Infinity) {
    return data[data.length - 1].price - data[0].price;
  }
  // priceChange = priceToday - priceXDaysAgo
  const priceToday = data[data.length - 1].price;
  const priceXDaysAgo = data[data.length - numDays - 1].price;
  return priceToday - priceXDaysAgo;
}

/**
 * Creates a string describing price change
 * @param data
 * @param priceChange
 * @returns a string in the form of +/-$XXXX.XX(+/-XX.XX%)
 */
export function formatPriceChangeString(
  data: IWatchPriceData[],
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
  data: IWatchPriceData[],
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
export function getLatestPrice(data: IWatchPriceData[]): number {
  return data[data.length - 1].price;
}
/**
 * Get latest date of watch
 * @param data
 * @returns latest price of watch
 */
export function getLatestDate(data: IWatchPriceData[]): Date {
  return data[data.length - 1].date;
}
