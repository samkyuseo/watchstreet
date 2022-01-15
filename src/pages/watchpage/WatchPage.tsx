import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Specs } from '../../components/specs/Specs';
import { Footer } from '../../components/footers/Footer';
import { Image } from '../../components/image/Image';
import { HStack } from '@chakra-ui/react';

import { Container } from '@chakra-ui/react';

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px'>
        <HStack css={{ gap: 40 }}>
          <Chart
            title='Nautilus 5711/1A-014'
            price={475212.89}
            priceChange={-172.5}
            data={data}
          />
          <Image />
        </HStack>
      </Container>
      <Specs />
      <Footer />
    </>
  );
};

export { WatchPage };

const data = [
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
