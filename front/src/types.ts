/* Types for watch data */
export interface IPriceData {
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
  id: string;
  image: string;
  specs: IWatchSpecs;
  priceData: IPriceData[];
}
/* Types for public watch lists */
export interface IWatchList {
  id: string /* Help generate the url */;
  image: string;
  owner: string;
  description: string;
  watches: IWatch[];
}
/* Types for watch articles */
export interface IWatchArticle {
  company: string;
  heading: string;
  articleSnippet: string;
  image: string;
  url: string;
}
/* Types for User data */
export interface IUser {
  id: String;
  userLists: IUserList[];
  userWatches: IUserWatch[];
}
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
/* Types for the chart component */
export interface ITimeDelta {
  id: string;
  selectText: string;
  displayText: string;
  numDays: number;
}
