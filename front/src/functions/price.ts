import { IAvgPrice, IPriceData, ITimeDelta } from '../../../types';
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
  data: IPriceData[] | IAvgPrice[],
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
  data: IPriceData[] | IAvgPrice[],
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
  data: IPriceData[] | IAvgPrice[],
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
export function getLatestPrice(data: IPriceData[] | IAvgPrice[]): number {
  return data[data.length - 1].price;
}
/**
 * Get latest date of watch
 * @param data
 * @returns latest price of watch
 */
export function getLatestDate(data: IPriceData[] | IAvgPrice[]): Date {
  return new Date(data[data.length - 1].date);
}
