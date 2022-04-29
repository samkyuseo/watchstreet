import { useState, useEffect, useRef } from 'react';
import { Heading, Text, Box, VStack } from '@chakra-ui/layout';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import { TimeDeltaSelector } from './TimeDeltaSelector';

import { formatTwoDecimals } from '../../functions/num';
import { IWatchPriceData } from '../../types';
import { ITimeDelta } from './types';
import { formatDate } from '../../functions/date';

const chartTimeDeltas: ITimeDelta[] = [
  { id: '0', selectText: '1W', displayText: 'Past Week', numDays: 7 },
  { id: '1', selectText: '1M', displayText: 'Past Month', numDays: 30 },
  { id: '2', selectText: '3M', displayText: 'Past 3 Months', numDays: 90 },
  { id: '3', selectText: '6M', displayText: 'Past 6 Months', numDays: 180 },
  { id: '4', selectText: '1Y', displayText: 'Past Year', numDays: 365 },
  { id: '5', selectText: 'ALL', displayText: 'All Time', numDays: Infinity },
];
export interface IChartProps {
  title: string;
  data: IWatchPriceData[];
}

const Chart = ({ title, data }: IChartProps) => {
  const [defaultIndex] = useState<number>(3);
  const [timeDelta, setParentTimeDelta] = useState<ITimeDelta>(
    chartTimeDeltas[defaultIndex]
  );
  const neatPriceRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {}, [timeDelta]);

  function calculatePriceChange(td: ITimeDelta): number {
    if (td.numDays === Infinity)
      return data[data.length - 1].price - data[0].price;
    // priceChange = priceToday - priceXDaysAgo
    const priceToday = data[data.length - 1].price;
    const priceXDaysAgo = data[data.length - td.numDays].price;
    return priceToday - priceXDaysAgo;
  }

  const neatPriceChange = formatTwoDecimals(calculatePriceChange(timeDelta));
  const percentPriceChange = formatTwoDecimals(
    (calculatePriceChange(timeDelta) / data[data.length - 1].price) * 100
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (neatPriceRef.current) {
        neatPriceRef.current.innerText = `$${formatTwoDecimals(
          payload[0].value
        )}`;
      }
      return (
        <Box>
          <Text>{label}</Text>
        </Box>
      );
    }
    return <></>;
  };

  return (
    <VStack alignItems="left" width="100%">
      <Heading variant="page-heading">{title}</Heading>
      <Box>
        <Heading variant="chart-heading" ref={neatPriceRef}></Heading>
        <Text variant="bold-text" display="inline-block">
          {calculatePriceChange(timeDelta) < 0 ? '-' : '+'}
          {neatPriceChange} ({percentPriceChange}%)
        </Text>{' '}
        <Text display="inline-block">{timeDelta.displayText}</Text>
      </Box>
      <br />
      <Box>
        <LineChart
          width={600}
          height={300}
          data={data
            .slice(data.length - timeDelta.numDays, -1)
            .map((d) => ({ ...d, date: formatDate(d.date) }))}
        >
          <XAxis dataKey={'date'} tick={false} axisLine={false} />
          <Tooltip
            isAnimationActive={false}
            content={<CustomTooltip />}
            position={{ y: 0 }}
            allowEscapeViewBox={{ y: true, x: true }}
            wrapperStyle={{ top: -20, left: -50 }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#24E5AF"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        <TimeDeltaSelector
          chartTimeDeltas={chartTimeDeltas}
          setParentTimeDelta={setParentTimeDelta}
          defaultIndex={defaultIndex}
        />
      </Box>
    </VStack>
  );
};

export { Chart };
