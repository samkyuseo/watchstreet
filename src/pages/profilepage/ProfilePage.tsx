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

import { getFakeWatchPriceHistory } from '../../api/lib/watch';
import { getUserLists, getUserWatches } from '../../api/lib/user';
import { IUserWatch, IUserList } from '../../types';

import johnmayer from '../../assets/images/johnmayer.jpg';
import bingingwithbabish from '../../assets/images/bingingwithbabish.jpeg';
import christianoronaldo from '../../assets/images/christianoronaldo.jpeg';
import hodinkeeimage from '../../assets/images/hodinkeeimage.jpeg';
import theoandharrisimage from '../../assets/images/theoandharrisimage.jpeg';

const ProfilePage = () => {
  const [userWatches, setUserWatches] = useState<IUserWatch[] | undefined>(
    undefined
  );
  const [userLists, setUserLists] = useState<IUserList[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const userWatches = await getUserWatches();
      const userLists = await getUserLists();
      setUserWatches(userWatches);
      setUserLists(userLists);
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
            <Chart title="" data={getFakeWatchPriceHistory()} />
          </Section>
          {/* Trending List */}
          <Section>
            <Heading variant="section-heading">Trending Lists</Heading>
            <Box marginY="20px">
              <Divider width="100%" />
            </Box>
            <Wrap spacing="5px" shouldWrapChildren={true}>
              {trendingListTags.map((tag, index) => {
                return <Tag key={index} image={tag.image} text={tag.text} />;
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
              {newsArticles.map((article, index) => {
                return (
                  <Article
                    key={index}
                    company={article.company}
                    heading={article.heading}
                    article={article.article}
                    image={article.image}
                  />
                );
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
  {
    image: christianoronaldo,
    text: 'Christiano Ronaldo',
  },
  {
    image: johnmayer,
    text: 'John Mayer',
  },
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
  {
    image: christianoronaldo,
    text: 'Christiano Ronaldo',
  },
];

const newsArticles = [
  {
    company: 'Theo & Harris',
    heading: 'Now Rolex And Cartier Are Up Over 400% In A Week (Pt. 2)',
    article:
      'What does this mean for the watch market? Are we in a bubble? Is a bubble even possible or is that just plain old silly? This seems to have happened because of the Patek Tiffany 5711 selling for many many millions of dollars but what does it mean? Do Rolex watches hold their value?',
    image: theoandharrisimage,
  },
  {
    company: 'Hodinkee',
    heading:
      "Introducing: Zenith's Latest Defy Is The Funky '60s Revival I've Been Waiting For",
    article:
      'The contemporary Zenith Defy collection, in its current form since 2017, looks like a watch that was designed to meet the trends of the 2020s. The connection between the bracelet and strap has an integrated aesthetic.',
    image: hodinkeeimage,
  },
];

export { ProfilePage };
