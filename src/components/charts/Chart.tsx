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

/**
 * Calculates price change given the some data nd the time delta
 * @param {IWatchPriceData[]} data
 * @param {ITimeDelta} td
 * @returns {number} amount changed in the time period
 */
function calculatePriceChange(data: IWatchPriceData[], td: ITimeDelta): number {
  if (td.numDays === Infinity)
    return data[data.length - 1].price - data[0].price;
  // priceChange = priceToday - priceXDaysAgo
  const priceToday = data[data.length - 1].price;
  const priceXDaysAgo = data[data.length - td.numDays].price;
  return priceToday - priceXDaysAgo;
}

function formatPriceChangeStr(priceChange: number, data: IWatchPriceData[]) {
  const neatPercentPriceChange = formatTwoDecimals(
    (priceChange / data[data.length - 1].price) * 100
  );
  const neatPriceChange = formatTwoDecimals(priceChange);

  let formatted = `${
    priceChange < 0 ? '-' : '+'
  }${neatPriceChange} (${neatPercentPriceChange}%)`;

  return formatted;
}

function getLatestPrice(data: IWatchPriceData[]) {
  return data[data.length - 1].price;
}

export interface IChartProps {
  title: string;
  data: IWatchPriceData[];
}

const Chart = ({ title, data }: IChartProps) => {
  const [defaultIndex] = useState<number>(3);
  const [timeDelta, setParentTimeDelta] = useState<ITimeDelta>(
    chartTimeDeltas[defaultIndex]
  );
  useEffect(() => {
    /* Set the chart price as soon as component is */
    if (priceRef.current) {
      priceRef.current.innerText = formatTwoDecimals(getLatestPrice(data));
    }
    if (priceChangeRef.current) {
      priceChangeRef.current.innerText = formatPriceChangeStr(
        calculatePriceChange(data, timeDelta),
        data
      );
    }
  }, [timeDelta, data]);

  const priceRef = useRef<HTMLHeadingElement>(null);
  const priceChangeRef = useRef<HTMLParagraphElement>(null);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active && priceRef.current) {
      priceRef.current.innerText = formatTwoDecimals(getLatestPrice(data));
    }
    if (!active && priceChangeRef.current) {
      priceChangeRef.current.innerText = formatPriceChangeStr(
        calculatePriceChange(data, timeDelta),
        data
      );
    }
    if (active && payload && payload.length) {
      if (priceRef.current) {
        priceRef.current.innerText = `$${formatTwoDecimals(payload[0].value)}`;
      }
      if (priceChangeRef.current) {
        priceChangeRef.current.innerText = formatPriceChangeStr(
          getLatestPrice(data) - payload[0].value,
          data
        );
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
        <Heading variant="chart-heading" ref={priceRef}></Heading>
        <Text
          variant="bold-text"
          display="inline-block"
          ref={priceChangeRef}
        ></Text>{' '}
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
