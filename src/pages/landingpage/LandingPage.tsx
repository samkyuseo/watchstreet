import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { Chart } from './Chart';
import { WatchImage } from '../../components/images/WatchImage/WatchImage';
import { LandingNavbar } from './LandingNavbar';
import { Button, Box, Heading, Text, Flex } from '@chakra-ui/react';

import { getWatch } from '../../api/lib/watch';
import { IWatch } from '../../types';
import { LoadingPage } from '../loadingpage/LoadingPage';
import { Footer } from '../../components/footers/Footer';

import { isMobile } from 'react-device-detect';

import patek from '../../assets/images/patek.jpg';

const LandingPage = () => {
  const [watch, setWatch] = useState<IWatch | null>(null);
  const [id] = useState<string>('2');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const watch = await getWatch();
      setWatch(watch);
    };
    fetchData().catch(console.error);
  }, [id]);

  if (isMobile) {
    return (
      <Flex height='100%' width='100%' flexDir='column'>
        <br />
        <br />
        <Flex flexDir='column' alignItems={'center'} textAlign='center'>
          <Heading variant={'hero-heading-mobile'} marginX={'10px'}>
            Learn, Discover, Track.
          </Heading>
          <br></br>
          <Text variant='hero-text-mobile'>What is your watch collection worth?</Text>
          <br></br>
          <Flex gap='5'>
            <Button variant='outline' onClick={() => navigate('login')}>
              Login
            </Button>
            <Button variant='pop' onClick={() => navigate('signup')}>
              Sign Up
            </Button>
          </Flex>
        </Flex>
        <br></br>
        <Flex justifyContent='space-between' paddingX='30px' paddingBottom='30px'>
          {watch ? (
            <Flex flexDir='column' width='100%'>
              {/* Price Data Section */}
              <Flex flexDir='column'>
                <Chart title={watch.specs.model} data={watch.priceData} />
                {/* Actions */}
                <Flex height='300px'>
                  <WatchImage image={patek} />
                </Flex>
                <Button variant='pop' width='100%'>
                  Add to Collection
                </Button>
                <Button mt='20px' variant='outline' width='100%'>
                  Add to List
                </Button>
              </Flex>
            </Flex>
          ) : (
            <LoadingPage />
          )}
        </Flex>
        <br />
        <br />
        <Footer />
      </Flex>
    );
  }

  return (
    <Flex height='100%' width='100%' flexDir='column'>
      <LandingNavbar />
      <br />
      <Flex flexDir='column' alignItems={'center'}>
        <Heading variant={'hero-heading'}>Learn, Discover, Track.</Heading>
        <br></br>
        <Text variant='hero-text'>What is your watch collection worth?</Text>
        <br />
        <Flex gap='5'>
          <Button variant='outline' size='lg' onClick={() => navigate('login')}>
            Login
          </Button>
          <Button variant='pop' size='lg' onClick={() => navigate('signup')}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
      <br></br>
      <br></br>
      <Flex
        maxWidth='80%'
        justifyContent={'space-between'}
        paddingX='30px'
        paddingBottom='30px'
        margin='auto'
        border='1px'
        borderColor='gray.200'
        borderRadius='lg'
        boxShadow='md'
      >
        {watch ? (
          <>
            <Content>
              {/* Price Data Section */}
              <Section>
                <Chart title={watch.specs.model} data={watch.priceData} />
              </Section>
            </Content>
            <Box top='110px' width='30%' height='350'>
              {/* Image */}
              <br />
              <br />
              <Flex height='100%'>
                <WatchImage image={patek} />
              </Flex>
              {/* Actions */}
              <Button mt='40px' variant='pop' width='100%'>
                Add to Collection
              </Button>
              <Button mt='20px' variant='outline' width='100%'>
                Add to List
              </Button>
            </Box>
          </>
        ) : (
          <LoadingPage />
        )}
      </Flex>
      <br />
      <br />
      <Footer />
    </Flex>
  );
};

export { LandingPage };
