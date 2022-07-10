import { useState, useEffect, useRef } from 'react';
import { Heading, Text, Box, VStack } from '@chakra-ui/layout';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import { TimeDeltaSelector } from './TimeDeltaSelector';

import {
  formatTwoDecimals,
  calculatePriceChange,
  formatPriceChangeString,
  getLatestPrice,
} from '../../functions/price';
import { formatDate } from '../../functions/date';

import { IPriceData, ITimeDelta } from '../../../../types';

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
  data: IPriceData[];
}

const Chart = ({ title, data }: IChartProps) => {
  /* Hooks */
  const [defaultIndex] = useState<number>(3);
  const [timeDelta, setParentTimeDelta] = useState<ITimeDelta>(
    chartTimeDeltas[defaultIndex]
  );
  const priceRef = useRef<HTMLHeadingElement>(null);
  const priceChangeRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    /* Set the chart price as soon as component is rendered */
    if (priceRef.current) {
      priceRef.current.innerText = `$${formatTwoDecimals(
        getLatestPrice(data)
      )}`;
    }
    if (priceChangeRef.current) {
      priceChangeRef.current.innerText = formatPriceChangeString(
        data,
        calculatePriceChange(data, timeDelta)
      );
    }
  }, [timeDelta, data]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    /* Tool tip is not active */
    if (!active && priceRef.current) {
      priceRef.current.innerText = `$${formatTwoDecimals(
        getLatestPrice(data)
      )}`;
    }
    if (!active && priceChangeRef.current) {
      priceChangeRef.current.innerText = formatPriceChangeString(
        data,
        calculatePriceChange(data, timeDelta)
      );
    }
    /* Tool tip is active */
    if (active && payload && payload.length) {
      if (priceRef.current) {
        priceRef.current.innerText = `$${formatTwoDecimals(payload[0].value)}`;
      }
      if (priceChangeRef.current) {
        const td =
          timeDelta.numDays === Infinity ? data.length : timeDelta.numDays;
        /* Can't use calculatePriceChange, since end value is different */
        const priceChange = payload[0].value - data[data.length - td].price;
        priceChangeRef.current.innerText = formatPriceChangeString(
          data,
          priceChange
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
        <Heading variant="chart-heading" ref={priceRef} />
        <Text
          variant="bold-text"
          display="inline-block"
          ref={priceChangeRef}
        ></Text>{' '}
        <Text display="inline-block">{timeDelta.displayText}</Text>
      </Box>
      <br />
      <Box width="600px">
        <LineChart
          width={600}
          height={300}
          data={data
            .slice(data.length - timeDelta.numDays, data.length)
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
