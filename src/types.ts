interface IWatchPriceData {
  price: number;
  date: Date;
}

interface IWatchSpecs {
  model: string;
  brand: string;
  referenceNumber: string;
  yearOfProduction: string;
  caseMaterial: string;
  braceletMaterial: string;
  description: string;
}
interface IWatch {
  specs: IWatchSpecs;
  priceHistory: IWatchPriceData[];
}

export type { IWatch, IWatchPriceData, IWatchSpecs };
