import { useEffect, useState } from 'react';

import { Page } from '../../components/layouts/Page';
import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { StickySidebar } from '../../components/layouts/StickySidebar';

import { Box, Heading, Divider, Flex, Tag, Tooltip } from '@chakra-ui/react';
import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { WatchCollectionTable } from '../../components/tables/WatchCollectionTable/WatchCollectionTable';
import { Article } from '../../components/articles/Article';

import { getUser, getCollSum } from '../../api/lib/user';
import { IWatchArticle, IUser2, IAvgPrice } from '../../types';

import { getArticles } from '../../api/lib/watch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { LoadingPage } from '../loadingpage/LoadingPage';

const ProfilePage = () => {
  const [user, loading, error] = useAuthState(getAuth());

  const [articles, setArticles] = useState<IWatchArticle[] | undefined>(undefined);
  const [userData, setUserData] = useState<IUser2>();
  const [collSum, setCollSum] = useState<IAvgPrice[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userData = await getUser(user.uid);
        setUserData(userData);
      }
    };
    fetchData().catch(console.error);
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getArticles();
      setArticles(articles);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        const collSum = await getCollSum(userData.collection);
        setCollSum(collSum);
      }
    };
    fetchData().catch(console.error);
  }, [userData]);

  if (loading || error) {
    return <LoadingPage />;
  }

  if (!userData || !collSum) {
    return <LoadingPage />;
  }

  return (
    <>
      <Navbar />
      <Page>
        <Content>
          {/* Portfolio Section */}
          <Section>{collSum && <Chart title='' data={collSum} />}</Section>
          <Section>
            <Flex flexDirection='column'>
              <Flex flexDirection='row' gap={2}>
                <Heading variant='section-heading'>News Articles</Heading>
                <Tooltip label='This is an experimental feature!'>
                  <Tag marginTop={'auto'}>alpha</Tag>
                </Tooltip>
              </Flex>
              <Box marginTop='20px'>
                <Divider width='100%' />
              </Box>
              {articles &&
                articles.map((article, index) => {
                  return <Article key={index} {...article} />;
                })}
            </Flex>
          </Section>
        </Content>
        <StickySidebar>
          <WatchCollectionTable userData={userData} />
        </StickySidebar>
      </Page>
    </>
  );
};

export { ProfilePage };
