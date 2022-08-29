import { DocumentReference } from 'firebase/firestore';

/* Types for watch data */
export interface IDetails {
  dial_color: string;
  bezel_insert_colors: string;
  year: string;
  approximate_age: string;
  paper_date: string;
  nickname: string;
  box: string;
  papers: string;
  alternate_reference_numbers: string;
  condition: string;
  limited_quantity: string;
  image: string;
  vendor: string;
  url: string;
}
export interface IPrice {
  price: number;
  date: string;
  details: IDetails;
}
export interface IAvgPrice {
  price: number;
  date: string;
  prices?: IPrice[]; // can be null
}
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
export interface ISpecs {
  general: {
    brand_name: string;
    model_name: string;
    model_number: string;
    years_released: string;
    years_stopped: string;
  };
  case: {
    case_materials: string;
    case_back: string;
    case_size: string;
    case_thickness: string;
    bezel_materials: string;
    bezel_insert_materials: string;
    bezel_features: string;
  };
  movement: {
    base_caliber: string;
    manuf_caliber: string;
    movement_type: string;
    calendar_type: string;
    power_reserve: string;
    complications: string;
  };
  bracelet: {
    band_materials: string;
    lug_width: string;
    bracelet_name: string;
  };
  images: string[];
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
export interface IUser2 {
  collection: IUserWatch2[];
}
export interface IUserWatch2 {
  watch_ref: DocumentReference;
  price_ref: DocumentReference;
  purchase_price: number;
  id: string;
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
