import {
  Container,
  Heading,
  Flex,
  Text,
  Box,
  Divider,
  HStack,
  VStack,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { LineChart, Line } from 'recharts';

const Chart = () => {
  return (
    <Container maxWidth='70%' mt='100px'>
      <Heading>Nautilus 5711/1A-014</Heading>
      <HStack css={{ gap: '40px' }}>
        <VStack alignItems='left'>
          <Box>
            <Heading>$475,212.89</Heading>
            <Text variant='bold' display='inline-block'>
              -$172.5 (-0.06%)
            </Text>{' '}
            <Text display='inline-block'>Today</Text>
          </Box>
          <Box>
            <LineChart width={700} height={285} data={data}>
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#24E5AF'
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
            <Flex style={{ gap: 50 }}>
              <Text
                variant='bold'
                color='green.light'
                textDecoration='underline'
                textUnderlineOffset='10px'
                textDecorationThickness='2px'
              >
                1D
              </Text>
              <Text variant='bold'>1M</Text>
              <Text variant='bold'>3M</Text>
              <Text variant='bold'>1Y</Text>
              <Text variant='bold'>ALL</Text>
            </Flex>
            <Divider
              mt='5px'
              width='700px'
              style={{ height: 0.1, backgroundColor: 'black' }}
            />
          </Box>
        </VStack>
        <Image
          width='250px'
          height='390px'
          borderRadius='lg'
          border='1px'
          borderColor='gray.200'
          src='/patek.jpg'
          objectFit='contain'
        />
      </HStack>
    </Container>
  );
};

export { Chart };

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
