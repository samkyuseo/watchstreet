import { IUserWatch, IUserList, IWatch } from '../../types';
import { getFakeWatchPriceHistory } from '../lib/watch';

/**
 * Get User's watch collection
 * @returns {Promise<IUserWatch[]>} an array of the user's watches
 */
export async function getUserWatches(): Promise<IUserWatch[]> {
  const collection: IUserWatch[] = [
    {
      watch: watch1,
      numberOfWatches: 2,
      purchaseDate: new Date('December 17, 2022'),
    },
    {
      watch: watch2,
      numberOfWatches: 3,
      purchaseDate: new Date('November 17, 2022'),
    },
  ];
  return collection;
}
/**
 * Get User's watch lists
 * @returns {Promise<IUserList[]>} an array of list watches
 */
export async function getUserLists(): Promise<IUserList[]> {
  const userLists: IUserList[] = [
    {
      title: 'My Holy Grails',
      emoji: '😇',
      watches: watchList1,
    },
    {
      title: 'Investment Pieces',
      emoji: '💰',
      watches: watchList1,
    },
  ];
  return userLists;
}

/** Fake data */
const watch1: IWatch = {
  specs: {
    model: 'Nautilus 5711/1A-014',
    brand: 'Patek Phillipe',
    referenceNumber: '5711/1A-014',
    yearOfProduction: '2021',
    caseMaterial: 'Steel',
    braceletMaterial: 'Steel',
    description: `On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
      olive-green shade that is new to the Nautilus collection and which
      should delight lovers of this cult watch, an icon of sporting elegance.
      The highly recognizable design of the case, bezel and bracelet is
      enhanced by a subtle alternation between satinated and polished manual
      finishing. Inside this model water-resistant to 120m beats a
      self-winding caliber visible through a transparent sapphire crystal
      case-back.`,
  },
  priceHistory: getFakeWatchPriceHistory(),
};

const watch2: IWatch = {
  specs: {
    model: 'Rolex GMT Master II',
    brand: 'Rolex',
    referenceNumber: '126710BLRO',
    yearOfProduction: '2021',
    caseMaterial: 'Steel',
    braceletMaterial: 'Steel',
    description: `Designed to show the time in two different time zones simultaneously,
    the GMT-Master, launched in 1955, was originally developed as a navigation instrument
    for professionals criss-crossing the globe. Heir to the original model, 
    the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. 
    Its combination of peerless functionality, robustness and instantly recognizable
    aesthetics has attracted a wider audience of world travellers.`,
  },
  priceHistory: getFakeWatchPriceHistory(),
};

const watch3: IWatch = {
  specs: {
    model: 'AP Royal Oak "Jumbo"',
    brand: 'Audemars Piguets',
    referenceNumber: '15202',
    yearOfProduction: '2021',
    caseMaterial: 'Rose Gold',
    braceletMaterial: 'Rose Gold',
    description: `Inside the watch is an all-new movement from Audemars Piguet. 
    Gone is the 2121 movement, and in it’s stead is the 7121. Practically speaking,  
    the movement is an improvement upon it’s older brother. The movement features a 
    55-hour power reserve instead of the 40-hour of the 2121. The movement will now beat 
    at 4-Hz instead of 2.75-Hz. And, to enthusiast delight everywhere, a quick-set date. F`,
  },
  priceHistory: getFakeWatchPriceHistory(),
};

const watchList1: IUserWatch[] = [
  {
    watch: watch1,
    numberOfWatches: 2,
    purchaseDate: new Date('December 17, 2022'),
  },
  {
    watch: watch2,
    numberOfWatches: 3,
    purchaseDate: new Date('November 17, 2022'),
  },
  {
    watch: watch3,
    numberOfWatches: 0,
    purchaseDate: new Date('November 17, 2022'),
  },
  {
    watch: watch1,
    numberOfWatches: 2,
    purchaseDate: new Date('December 17, 2022'),
  },
  {
    watch: watch2,
    numberOfWatches: 3,
    purchaseDate: new Date('November 17, 2022'),
  },
  {
    watch: watch3,
    numberOfWatches: 0,
    purchaseDate: new Date('November 17, 2022'),
  },
];
