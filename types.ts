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
export interface IWatchSpecs2 {
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

/* Types for requests */
