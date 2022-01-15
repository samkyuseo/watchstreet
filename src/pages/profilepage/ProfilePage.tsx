import { Container, HStack } from '@chakra-ui/react';
import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Table } from '../../components/tables/Table';
import { IWatchTableItem } from '../../types/watch';
import { IDataPoint } from '../../types/chart';
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px'>
        <HStack css={{ gap: '40px' }}>
          <Chart
            title='Your Portfolio'
            price={225125.5}
            priceChange={-1025.5}
            data={data}
          />
          <Table watches={watches} />
        </HStack>
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

export { ProfilePage };
