import { Text, Heading } from '@chakra-ui/react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';

import { Navbar } from '../../components/navbars/Navbar';
import { WatchListTable } from '../../components/tables/WatchListTable/WatchListTable';

import { WatchCollectionTable } from '../../components/tables/WatchCollectionTable/WatchCollectionTable';

const WatchListPage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <Content>
          <Section>
            <Heading variant='page-heading'>John Mayer's Collection</Heading>
            <Text mt='20px'>
              The following is John Mayer's watch collection based on all the
              latest media that we've gathered. Remember when the Rolex
              Cosmograph Daytona 116508 got nicknamed the John Mayer Daytona?
            </Text>
          </Section>
          <Section>
            <WatchListTable watches={tableRows} />
          </Section>
        </Content>
        <StickySidebar>
          <WatchCollectionTable watchLists={watchLists} />
        </StickySidebar>
      </Page>
    </>
  );
};
const watchLists = [
  {
    title: 'My Holy Grail Watches',
    emoji: '🌠',
    watches: [
      {
        modelName: 'Cartier Santos',
        numWatches: 2,
        price: 6000,
        priceChange: -9.89,
      },
      {
        modelName: 'Rolex GMT Master II Pepsi',
        numWatches: 3,
        price: 65330,
        priceChange: 5.25,
      },
      {
        modelName: 'Jaeger Le Coultre Reverso',
        numWatches: 2,
        price: 14000,
        priceChange: -3.45,
      },
      {
        modelName: 'IWC Chrono 41',
        numWatches: 2,
        price: 4500,
        priceChange: -3.89,
      },
      {
        modelName: 'Cartier Santos',
        numWatches: 2,
        price: 6000,
        priceChange: -9.89,
      },
    ],
  },
];

const tableRows = [
  {
    company: 'Audemar Piguet',
    model: 'Concept GMT, Tourbillon',
    material: 'Ceramic, Steel',
    reference: '26560',
    price: 213000,
    percentChange: -25.4,
  },
  {
    company: 'Audemar Piguet',
    model: 'Concept Royal Oak Chronograph',
    material: 'Steel',
    reference: '265891',
    price: 33950,
    percentChange: -90.4,
  },
  {
    company: 'Audemar Piguet',
    model: 'Royal Oak, Extra Thin, Tourbillon',
    material: 'Rose Gold',
    reference: '152020R',
    price: 180000,
    percentChange: +0.4,
  },
  {
    company: 'Patek Phillipe',
    model: 'Aquanaut, Travel Time',
    material: 'Steel',
    reference: '5164A',
    price: 265000,
    percentChange: 300,
  },
  {
    company: 'Patek Phillipe',
    model: 'Perpetual Calendar Chronograph',
    material: 'Platinum',
    reference: '5971',
    price: 134333,
    percentChange: 20.6,
  },
  {
    company: 'Patek Phillipe',
    model: 'Rattrapante',
    material: 'Rose Gold',
    reference: '5004',
    price: 49950,
    percentChange: -94.1,
  },
  {
    company: 'Rolex',
    model: 'Daytona, Omani Khanjar Stamp',
    material: 'Steel',
    reference: '6265',
    price: 500000,
    percentChange: -20.1,
  },
  {
    company: 'Rolex',
    model: 'Daytona, UAE Stamp',
    material: 'Steel',
    reference: '6256',
    price: 146222,
    percentChange: 12.1,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'Gold',
    reference: '6263',
    price: 225145,
    percentChange: 21.4,
  },
  {
    company: 'Rolex',
    model: 'Daytona, Pulsation Dial',
    material: 'Steel',
    reference: '6264',
    price: 1000000,
    percentChange: 45.8,
  },
  {
    company: 'Rolex',
    model: 'Daytona, Paul Newman Dial',
    material: 'Steel',
    reference: '6264',
    price: 3500000,
    percentChange: 300.9,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'White Gold',
    reference: '6269',
    price: 1600000,
    percentChange: 25.1,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'Rose Gold',
    reference: '6270',
    price: 1004500,
    percentChange: 19.3,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'Steel',
    reference: '116598',
    price: 300000,
    percentChange: 76.4,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'White Gold',
    reference: '116599',
    price: 200023,
    percentChange: -12.4,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'Yellow Gold',
    reference: '116508',
    price: 34650,
    percentChange: -16.4,
  },
  {
    company: 'Rolex',
    model: 'Daytona',
    material: 'White Gold',
    reference: '116509',
    price: 37450,
    percentChange: 18.4,
  },
  {
    company: 'Rolex',
    model: 'Submariner, Comex',
    material: 'Steel',
    reference: '5514',
    price: 37400,
    percentChange: -60.1,
  },
  {
    company: 'Rolex',
    model: 'Submariner',
    material: 'Steel',
    reference: '6200',
    price: 581322,
    percentChange: 13.3,
  },
];

export { WatchListPage };
