import { Heading, Flex, Text, Box, Divider, VStack } from '@chakra-ui/layout';
import { LineChart, Line } from 'recharts';
import { generateNeatVersion } from '../../functions/num';

interface IDataPoint {
  pv: number;
}

interface IChartProps {
  title: string;
  price: number;
  priceChange: number;
  data: IDataPoint[];
}

const Chart = ({ title, price, priceChange, data }: IChartProps) => {
  const neatPrice = generateNeatVersion(price);
  const neatPriceChange = generateNeatVersion(priceChange);
  const percentPriceChange = generateNeatVersion((priceChange / price) * 100);
  return (
    <VStack alignItems='left' width='100%'>
      <Heading variant='chart-heading'>{title}</Heading>
      <Box>
        <Heading variant='chart-heading'>${neatPrice}</Heading>
        <Text variant='bold-text' display='inline-block'>
          {priceChange < 0 ? '-' : '+'}
          {neatPriceChange} ({percentPriceChange}%)
        </Text>{' '}
        <Text display='inline-block'>Today</Text>
      </Box>
      <Box>
        <LineChart width={600} height={285} data={data}>
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
            variant='bold-text'
            color='green.light'
            textDecoration='underline'
            textUnderlineOffset='13px'
            textDecorationThickness='2px'
          >
            1D
          </Text>
          <Text variant='bold-text'>1M</Text>
          <Text variant='bold-text'>3M</Text>
          <Text variant='bold-text'>1Y</Text>
          <Text variant='bold-text'>ALL</Text>
        </Flex>
        <Divider my='10px' width='100%' />
      </Box>
    </VStack>
  );
};

export { Chart };
