/* Fake watch database */
import { IWatch, IWatchArticle, IWatchList } from '../types';
import { getFakeWatchPriceData } from '../functions/price';

export const watchDB: IWatch[] = [
  {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/patek.jpg?alt=media',
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
    priceData: getFakeWatchPriceData(),
  },
  {
    id: '2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/rolexgmt2.png?alt=media',
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
    priceData: getFakeWatchPriceData(),
  },
  {
    id: '3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/aproyaloak.png?alt=media',
    specs: {
      model: 'AP Royal Oak "Jumbo"',
      brand: 'Audemars Piguets',
      referenceNumber: '15202',
      yearOfProduction: '2021',
      caseMaterial: 'Rose Gold',
      braceletMaterial: 'Rose Gold',
      description: `Inside the watch is an all-new movement from Audemars Piguet. 
      Gone is the 2121 movement, and in it's stead is the 7121. Practically speaking,  
      the movement is an improvement upon it's older brother. The movement features a 
      55-hour power reserve instead of the 40-hour of the 2121. The movement will now beat 
      at 4-Hz instead of 2.75-Hz. And, to enthusiast delight everywhere, a quick-set date.`,
    },
    priceData: getFakeWatchPriceData(),
  },
];

/* Fake trending list database. Linked to watchDB */
export const watchListDB: IWatchList[] = [
  {
    id: '2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/christianoronaldo.jpeg?alt=media',
    owner: 'Christiano Ronaldo',
    description: 'The goat of soccer has quite the collection!',
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
  {
    id: '0',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/johnmayer.jpg?alt=media',
    owner: 'John Mayer',
    description: `The following is John Mayer's watch collection based on all the latest media that we've gathered.`,
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
  {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/bingingwithbabish.jpeg?alt=media',
    owner: 'Binging with Babish',
    description:
      'The youtube star with over 10 million combined subscribers gained his way to fame through cooking videos and recipes.',
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
  {
    id: '3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/johnmayer.jpg?alt=media',
    owner: 'John Mayer',
    description: `The following is John Mayer's watch collection based on all the latest media that we've gathered.`,
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
  {
    id: '5',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/christianoronaldo.jpeg?alt=media',
    owner: 'Christiano Ronaldo',
    description: 'The goat of soccer has quite the collection!',
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
  {
    id: '4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/bingingwithbabish.jpeg?alt=media',
    owner: 'Binging with Babish',
    description:
      'The youtube star with over 10 million combined subscribers gained his way to fame through cooking videos and recipes.',
    watches: [...watchDB, ...watchDB, ...watchDB, ...watchDB],
  },
];

/* Fake articles database */
export const articleDB: IWatchArticle[] = [
  {
    company: 'Theo & Harris',
    heading: 'Now Rolex And Cartier Are Up Over 400% In A Week (Pt. 2)',
    articleSnippet:
      'What does this mean for the watch market? Are we in a bubble? Is a bubble even possible or is that just plain old silly? This seems to have happened because of the Patek Tiffany 5711 selling for many many millions of dollars but what does it mean? Do Rolex watches hold their value?',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/theoandharrisimage.jpeg?alt=media',
    url: 'https://theoandharris.com/now-rolex-and-cartier-are-up-over-400-in-a-week-pt-2/',
  },
  {
    company: 'Hodinkee',
    heading: "Introducing: Zenith's Latest Defy Is The Funky '60s Revival I've Been Waiting For",
    articleSnippet:
      'The contemporary Zenith Defy collection, in its current form since 2017, looks like a watch that was designed to meet the trends of the 2020s. The connection between the bracelet and strap has an integrated aesthetic.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/watchvalue-7e477.appspot.com/o/hodinkeeimage.jpeg?alt=media',
    url: 'https://www.hodinkee.com/articles/zeniths-defy-revival-a3642-vintage',
  },
];

/* Fake user database */
import { IUser } from '../types';

export const userDB: IUser[] = [
  {
    id: '0',
    userWatches: [
      {
        watch: watchDB[0],
        numberOfWatches: 2,
        purchaseDate: new Date('December 17, 2022'),
      },
      {
        watch: watchDB[1],
        numberOfWatches: 3,
        purchaseDate: new Date('November 17, 2022'),
      },
      {
        watch: watchDB[2],
        numberOfWatches: 0,
        purchaseDate: new Date('November 17, 2022'),
      },
    ],
    userLists: [
      {
        title: 'My Holy Grails',
        emoji: '😇',
        watches: [
          {
            watch: watchDB[0],
            numberOfWatches: 2,
            purchaseDate: new Date('December 17, 2022'),
          },
          {
            watch: watchDB[1],
            numberOfWatches: 3,
            purchaseDate: new Date('November 17, 2022'),
          },
          {
            watch: watchDB[2],
            numberOfWatches: 0,
            purchaseDate: new Date('November 17, 2022'),
          },
        ],
      },
      {
        title: 'Investment Pieces',
        emoji: '💰',
        watches: [
          {
            watch: watchDB[0],
            numberOfWatches: 2,
            purchaseDate: new Date('December 17, 2022'),
          },
          {
            watch: watchDB[1],
            numberOfWatches: 3,
            purchaseDate: new Date('November 17, 2022'),
          },
          {
            watch: watchDB[2],
            numberOfWatches: 0,
            purchaseDate: new Date('November 17, 2022'),
          },
        ],
      },
    ],
  },
];
