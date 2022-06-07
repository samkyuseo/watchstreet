import { useState, useEffect } from 'react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';

import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Specs } from '../../components/specs/Specs';
import { WatchImage } from '../../components/images/WatchImage/WatchImage';

import { Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getWatch } from '../../api/lib/watch';
import { IWatch } from '../../types';
import { LoadingPage } from '../loadingpage/LoadingPage';

const WatchPage = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState<IWatch | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const watch = await getWatch(id || '');
      setWatch(watch);
    };
    fetchData().catch(console.error);
  }, [id]);

  if (!watch) {
    return <LoadingPage />;
  }

  return (
    <>
      <Navbar />
      <Page>
        <Content>
          {/* Price Data Section */}
          <Section>
            <Chart title={watch.specs.model} data={watch.priceData} />
          </Section>
          {/* Specifications Section */}
          <Section>
            <Specs watchSpecs={watch.specs} />
          </Section>
        </Content>
        <StickySidebar height="350px">
          {/* Image */}
          <WatchImage image={watch.image} />
          {/* Actions */}
          <Button mt="40px" variant="pop" width="100%">
            Add to Collection
          </Button>
          <Button mt="20px" variant="outline" width="100%">
            Add to List
          </Button>
        </StickySidebar>
      </Page>
    </>
  );
};

export { WatchPage };
