import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Text, Heading } from '@chakra-ui/react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';
import { Navbar } from '../../components/navbars/Navbar';
import { WatchListTable } from '../../components/tables/WatchListTable/WatchListTable';
import { WatchCollectionTable } from '../../components/tables/WatchCollectionTable/WatchCollectionTable';

import { getUserLists } from '../../api/lib/user';
import { IUserList, IWatchList } from '../../types';
import { getTrendingList } from '../../api/lib/watch';

const WatchListPage = () => {
  const { id } = useParams();

  const [userLists, setUserLists] = useState<IUserList[] | undefined>(undefined);
  const [trendingList, setTrendingList] = useState<IWatchList | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const userLists = await getUserLists();
      const trendingList = await getTrendingList(id || '');
      setUserLists(userLists);
      setTrendingList(trendingList);
    };
    fetchData().catch(console.error);
  }, [id]);
  return (
    <>
      <Navbar />
      <Page>
        <Content>
          <Section>
            <Heading variant='page-heading'>{`${trendingList?.owner}'s Collection`}</Heading>
            <Text mt='20px'>{trendingList?.description}</Text>
          </Section>
          <Section>{trendingList && <WatchListTable watches={trendingList.watches} />}</Section>
        </Content>
        <StickySidebar>
          <WatchCollectionTable watchLists={userLists} />
        </StickySidebar>
      </Page>
    </>
  );
};

export { WatchListPage };
