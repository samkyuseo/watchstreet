import {
  Container,
  HStack,
  VStack,
  Heading,
  Divider,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Tag } from '../../components/tags/Tag';
import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Table } from '../../components/tables/Table';
import { IWatchTableItem } from '../../types/watch';
import { IDataPoint } from '../../types/chart';
import johnmayer from '../../assets/images/johnmayer.jpg';
import bingingwithbabish from '../../assets/images/bingingwithbabish.jpeg';
import christianoronaldo from '../../assets/images/christianoronaldo.jpeg';
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px'>
        {/* Portfolio Section */}
        <HStack css={{ gap: '40px' }}>
          <Chart title='' price={225125.5} priceChange={-1025.5} data={data} />
          <Table watches={watches} />
        </HStack>
        {/* Trending List */}
        <VStack alignItems='left' width='600px' mt='30px'>
          <Heading variant='section-heading'>Trending Lists</Heading>
          <Divider width='100%' />
          <Wrap>
            <WrapItem>
              {trendingListTags.map((tag, index) => {
                return <Tag key={index} image={tag.image} text={tag.text} />;
              })}
            </WrapItem>
          </Wrap>
        </VStack>
        {/* News */}
      </Container>
    </>
  );
};

const watches: IWatchTableItem[] = [
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
];

const data: IDataPoint[] = [
  {
    pv: 2400,
  },
  {
    pv: 1398,
  },
  {
    pv: 9800,
  },
  {
    pv: 3908,
  },
  {
    pv: 10000,
  },
  {
    pv: 9000,
  },
  {
    pv: 5679,
  },
  {
    pv: 30000,
  },
  {
    pv: 8000,
  },
  {
    pv: 10000,
  },
  {
    pv: 7000,
  },
  {
    pv: 12000,
  },
  {
    pv: 9000,
  },
  {
    pv: 20000,
  },
  {
    pv: 20000,
  },
  {
    pv: 10098,
  },
  {
    pv: 9800,
  },
  {
    pv: 15008,
  },
  {
    pv: 30000,
  },
  {
    pv: 40000,
  },
  {
    pv: 50000,
  },
];

const trendingListTags = [
  {
    image: johnmayer,
    text: 'John Mayer',
  },
  {
    image: bingingwithbabish,
    text: 'Binging with Babish',
  },
  {
    image: christianoronaldo,
    text: 'Christiano Ronaldo',
  },
  // {
  //   image: johnmayer,
  //   text: 'John Mayer',
  // },
  // {
  //   image: bingingwithbabish,
  //   text: 'Binging with Babish',
  // },
  // {
  //   image: christianoronaldo,
  //   text: 'Christiano Ronaldo',
  // },
  // {
  //   image: johnmayer,
  //   text: 'John Mayer',
  // },
  // {
  //   image: bingingwithbabish,
  //   text: 'Binging with Babish',
  // },
  // {
  //   image: christianoronaldo,
  //   text: 'Christiano Ronaldo',
  // },
  // {
  //   image: johnmayer,
  //   text: 'John Mayer',
  // },
  // {
  //   image: bingingwithbabish,
  //   text: 'Binging with Babish',
  // },
  // {
  //   image: christianoronaldo,
  //   text: 'Christiano Ronaldo',
  // },
];

export { ProfilePage };
