import { useEffect, useState } from 'react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';

import { Box, Heading, Divider, Flex, Wrap } from '@chakra-ui/react';
import { Tag } from '../../components/tags/Tag';
import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { WatchCollectionTable } from '../../components/tables/WatchCollectionTable/WatchCollectionTable';
import { Article } from '../../components/articles/Article';

import {
  getTotalValue,
  getUserLists,
  getUserWatches,
} from '../../api/lib/user';
import {
  IUserWatch,
  IUserList,
  IPriceData,
  IWatchList,
  IWatchArticle,
} from '../../types';

import { getArticles, getTrendingLists } from '../../api/lib/watch';

const ProfilePage = () => {
  /* Review: Could combine these all into one custom use effect hook */
  const [userWatches, setUserWatches] = useState<IUserWatch[] | undefined>(
    undefined
  );
  const [userLists, setUserLists] = useState<IUserList[] | undefined>(
    undefined
  );
  const [totalValue, setTotalValue] = useState<IPriceData[] | undefined>(
    undefined
  );
  const [trendingLists, setTrendingLists] = useState<IWatchList[] | undefined>(
    undefined
  );
  const [articles, setArticles] = useState<IWatchArticle[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const userWatches = await getUserWatches();
      const userLists = await getUserLists();
      const totalValue = await getTotalValue();
      const trendingLists = await getTrendingLists();
      const articles = await getArticles();
      setUserWatches(userWatches);
      setUserLists(userLists);
      setTotalValue(totalValue);
      setTrendingLists(trendingLists);
      setArticles(articles);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <Navbar />
      <Page>
        <Content>
          {/* Portfolio Section */}
          <Section>
            {totalValue && <Chart title="" data={totalValue} />}
          </Section>
          {/* Trending List */}
          <Section>
            <Heading variant="section-heading">Trending Lists</Heading>
            <Box marginY="20px">
              <Divider width="100%" />
            </Box>
            <Wrap spacing="5px" shouldWrapChildren={true}>
              {trendingLists &&
                trendingLists.map((tag, index) => {
                  return <Tag key={index} {...tag} />;
                })}
            </Wrap>
          </Section>
          {/* News */}
          <Section>
            <Flex flexDirection="column">
              <Heading variant="section-heading">News Articles</Heading>
              <Box marginTop="20px">
                <Divider width="100%" />
              </Box>
              {articles &&
                articles.map((article, index) => {
                  return <Article key={index} {...article} />;
                })}
            </Flex>
          </Section>
        </Content>
        <StickySidebar>
          <WatchCollectionTable watches={userWatches} watchLists={userLists} />
        </StickySidebar>
      </Page>
    </>
  );
};

export { ProfilePage };
