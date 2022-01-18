import { Heading, Flex, Text, Box, Divider, VStack } from '@chakra-ui/layout';
import { LineChart, Line } from 'recharts';
import { IDataPoint } from '../../types/chart';

interface IChartProps {
  title: string;
  price: number;
  priceChange: number;
  data: IDataPoint[];
}

const Chart = ({ title, price, priceChange, data }: IChartProps) => {
  const neatPrice = price.toFixed(2).toLocaleString();
  const neatPriceChange = priceChange.toFixed(2).toLocaleString();
  const percentPriceChange = ((priceChange / price) * 100).toFixed(2);
  return (
    <VStack alignItems='left' width='600px'>
      <Heading>{title}</Heading>
      <Box>
        <Heading>${neatPrice}</Heading>
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
