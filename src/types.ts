interface IWatchPriceData {
  price: number;
  date: Date;
}

interface IWatch {
  model: string;
  brand: string;
  referenceNumber: string;
  yearOfProduction: string;
  caseMaterial: string;
  description: string;
  priceHistory: IWatchPriceData[];
}

export type { IWatch, IWatchPriceData };
