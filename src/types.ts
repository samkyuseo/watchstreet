/** Types for watch data */
export interface IWatchPriceData {
  price: number;
  date: Date;
}
export interface IWatchSpecs {
  model: string;
  brand: string;
  referenceNumber: string;
  yearOfProduction: string;
  caseMaterial: string;
  braceletMaterial: string;
  description: string;
}
export interface IWatch {
  specs: IWatchSpecs;
  priceHistory: IWatchPriceData[];
}
/** Types for User data */
export interface IUserWatch {
  watch: IWatch;
  purchaseDate: Date;
  numberOfWatches: number;
}
export interface IUserList {
  title: string;
  emoji: string;
  watches: IUserWatch[];
}
/** Types for the chart component */
export interface ITimeDelta {
  id: string;
  selectText: string;
  displayText: string;
  numDays: number;
}
export function instanceOfTimeDelta(object: any): object is ITimeDelta {
  return 'numDays' in object;
}
