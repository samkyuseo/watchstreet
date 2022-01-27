import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';

import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Specs } from '../../components/specs/Specs';
import { WatchImage } from '../../components/images/WatchImage/WatchImage';

import patek from '../../assets/images/patek.jpg';
import { Button } from '@chakra-ui/react';

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <Content>
          {/* Price Data Section */}
          <Section>
            <Chart
              title='Nautilus 5711/1A-014'
              price={475212.89}
              priceChange={-172.5}
              data={data}
            />
          </Section>
          {/* Specifications Section */}
          <Section>
            <Specs />
          </Section>
        </Content>
        <StickySidebar height='350px'>
          {/* Image */}
          <WatchImage image={patek} />
          {/* Actions */}
          <Button mt='40px' variant='pop' width='100%'>
            Add to Collection
          </Button>
          <Button mt='20px' variant='outline' width='100%'>
            Add to List
          </Button>
        </StickySidebar>
      </Page>
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
