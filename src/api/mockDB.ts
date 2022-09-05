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
    company: 'Hodinkee',
    heading: "Hands-On: The Tudor Pelagos 39 – Is This The Dive Watch We've Been Waiting For?",
    articleSnippet:
      "ast week, while much of the watch world's eyes were trained on Geneva Watch Days, Tudor dropped the mic across town with the new Pelagos 39. Seemingly a play-the-hits evolution of the brand's well-known 42mm pro-spec dive watch, the Pelagos 39 is smaller, thinner, and simpler than its siblings. And those adjustments were enough to make a huge amount of noise with our readers – and with collectors worldwide.",
    image:
      'https://hodinkee.imgix.net/uploads/images/15844a2a-56ea-4433-88c1-9fff090c4d0c/L1010423.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=3520',
    url: 'https://www.hodinkee.com/articles/the-tudor-pelagos-39-is-this-the-dive-watch-weve-been-waiting-for',
  },
  {
    company: 'Theo & Harris',
    heading: 'The 10 Best Watches Under $3,000',
    articleSnippet:
      'Let’s talk watches baby! Today we are looking at the best watches under $3,000. What a steal! We are looking at Longines, Hamilton, Nomos, Seiko (of course), and a few more little buggers that I like a lot! I think sometimes it’s fun to deviate from the norm (Rolex, Grand Seiko, Tudor, Omega) a bit and see what else is out there at a more approachable price range. Let’s ride!',
    image: 'https://theoharris-pgrpc7nztxtdw9cw.stackpathdns.com/wp-content/uploads/overlay.jpg',
    url: 'https://theoandharris.com/the-10-best-watches-under-3000/',
  },
  {
    company: 'Teddy Baldassarre',
    heading: '51 Best Luxury Watch Brands To Know In 2022',
    articleSnippet:
      "How well do you know your luxury watch brands? The timepiece industry is populated by many dozens of companies — a handful of them still independent, many others now members of a larger luxury-goods conglomerate — each with its own unique origin story, historical highlights, and technical and aesthetic brand DNA. Here we've gathered what we consider the current top 50 luxury watch brands that should be on",
    image: 'https://cdn.shopify.com/s/files/1/0278/9723/3501/files/1-ALS-Brands.jpg?v=1650981873',
    url: 'https://teddybaldassarre.com/blogs/watches/luxury-watch-brands',
  },
  {
    company: 'Pride & Pinion',
    heading: "Paul Newman's Rolex Daytona - The Story of An Icon",
    articleSnippet:
      "The story of a $17.8m Rolex, the superstar who wore it, and how it became more than just a watch. It failed NASA's 'Moonwatch' tests, wasn't the first automatic chronograph and lacked a Rolex movement for almost 40 years, but today the Cosmograph Daytona is the jewel in Rolex's crown, and in no small part that's because of one man – Paul Newman",
    image:
      'https://cdn.shopify.com/s/files/1/2860/7664/articles/Pride_and_Pinion_-_Instagram_Photos-698-Edit-2_762x500_crop_center.jpg?v=1607704665',
    url: 'https://prideandpinion.com/en-us/blogs/articles/paul-newman-s-rolex-daytona-the-story-of-an-icon',
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
        numberOfWatches: 1,
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
        title: 'My Next Few Pieces',
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
