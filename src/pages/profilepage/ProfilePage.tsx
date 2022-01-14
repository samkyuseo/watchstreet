import { Container, HStack } from '@chakra-ui/react';
import { Navbar } from '../../components/navbars/Navbar';
import { Footer } from '../../components/footers/Footer';
import { Chart } from '../../components/charts/Chart';
import { Table } from '../../components/table/Table';
import { WatchTableItem } from '../../types/watch';
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px'>
        <HStack css={{ gap: '40px' }}>
          <Chart />
          <Table watches={watches} />
        </HStack>
      </Container>
      <Footer />
    </>
  );
};

const watches: WatchTableItem[] = [
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

export { ProfilePage };
