import {
  Box,
  Container,
  HStack,
  Text,
  Heading,
  Divider,
  Wrap,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Tag } from '../../components/tags/Tag';
import { Navbar } from '../../components/navbars/Navbar';
import { Chart } from '../../components/charts/Chart';
import { Table } from '../../components/tables/Table';

import { IWatchTableItem } from '../../types/watch';
import { IDataPoint } from '../../types/chart';

import johnmayer from '../../assets/images/johnmayer.jpg';
import bingingwithbabish from '../../assets/images/bingingwithbabish.jpeg';
import christianoronaldo from '../../assets/images/christianoronaldo.jpeg';
import hodinkeeimage from '../../assets/images/hodinkeeimage.jpeg';

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px'>
        {/* Portfolio Section */}
        <HStack css={{ gap: '40px' }}>
          <Chart title='' price={225125.5} priceChange={-1025.5} data={data} />
          <Table watches={watches} />
        </HStack>
        {/* Trending List */}
        <Box width='600px' mt='40px'>
          <Heading variant='section-heading'>Trending Lists</Heading>
          <Box marginY='20px'>
            <Divider width='100%' />
          </Box>
          <Wrap spacing='5px' shouldWrapChildren={true}>
            {trendingListTags.map((tag, index) => {
              return <Tag key={index} image={tag.image} text={tag.text} />;
            })}
          </Wrap>
        </Box>
        {/* News */}
        <Flex width='600px' mt='40px' flexDir='column'>
          <Heading variant='section-heading'>News</Heading>
          <Box marginTop='20px'>
            <Divider width='100%' />
          </Box>
          <Box
            width='660px'
            mb='100px'
            paddingX='30px'
            alignContent={'center'}
            _hover={{ backgroundColor: 'gray.50' }}
          >
            <Text variant='card-company-text' mb='20px'>
              Hodinkee
            </Text>
            <HStack spacing='50px'>
              <Box width='350px' minHeight='200px'>
                <Heading variant='card-heading' mb='20px'>
                  Introducing: Zenith's Latest Defy Is The Funky '60s Revival
                  I've Been Waiting For
                </Heading>
                <Text variant='card-text' mb='20px'>
                  The contemporary Zenith Defy collection, in its current form
                  since 2017, looks like a watch that was designed to meet the
                  trends of the 2020s....
                </Text>
                <Text variant='card-ticker-text'>Zenith Defy</Text>
              </Box>
              <Image
                width='200px'
                minHeight='200px'
                objectFit='cover'
                borderRadius='5px'
                src={hodinkeeimage}
              />
            </HStack>
          </Box>
        </Flex>
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

export { ProfilePage };
