import { useEffect, useState } from 'react';

import { Text, Heading } from '@chakra-ui/react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';
import { Navbar } from '../../components/navbars/Navbar';
import { WatchListTable } from '../../components/tables/WatchListTable/WatchListTable';
import { WatchCollectionTable } from '../../components/tables/WatchCollectionTable/WatchCollectionTable';

import { getUserLists } from '../../api/lib/user';
import { IUserList, IWatch } from '../../types';
import { getTrendingListWatches } from '../../api/lib/watch';

const WatchListPage = () => {
  const [userLists, setUserLists] = useState<IUserList[] | undefined>(
    undefined
  );
  const [listWatches, setListWatches] = useState<IWatch[] | undefined>(
    undefined
  );
  useEffect(() => {
    const fetchData = async () => {
      const userLists = await getUserLists();
      const listWatches = await getTrendingListWatches();
      setUserLists(userLists);
      setListWatches(listWatches);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <Navbar />
      <Page>
        <Content>
          <Section>
            <Heading variant="page-heading">John Mayer's Collection</Heading>
            <Text mt="20px">
              The following is John Mayer's watch collection based on all the
              latest media that we've gathered. Remember when the Rolex
              Cosmograph Daytona 116508 got nicknamed the John Mayer Daytona?
            </Text>
          </Section>
          <Section>
            {listWatches && <WatchListTable watches={listWatches} />}
          </Section>
        </Content>
        <StickySidebar>
          <WatchCollectionTable watchLists={userLists} />
        </StickySidebar>
      </Page>
    </>
  );
};

export { WatchListPage };
