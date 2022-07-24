import { useEffect, useRef } from 'react';
import { Heading, Text, Box, VStack } from '@chakra-ui/layout';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import {
  formatTwoDecimals,
  calculatePriceChange,
  formatPriceChangeString,
  getLatestPrice,
} from '../../functions/price';
import { formatDate } from '../../functions/date';

import { IAvgPrice, IPriceData } from '../../../../types';

export interface IChartProps {
  subtitle?: string;
  title: string;
  data: IPriceData[] | IAvgPrice[];
}

const Chart = ({ subtitle, title, data }: IChartProps) => {
  /* Hooks */
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
        calculatePriceChange(data, data.length)
      );
    }
  }, [data]);

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
        calculatePriceChange(data, data.length)
      );
    }
    /* Tool tip is active */
    if (active && payload && payload.length) {
      if (priceRef.current) {
        priceRef.current.innerText = `$${formatTwoDecimals(payload[0].value)}`;
      }
      if (priceChangeRef.current) {
        /* Can't use calculatePriceChange, since end value is different */
        const priceChange = payload[0].value - data[0].price;
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
      <Text variant="chart-subheading">{subtitle?.toUpperCase()}</Text>
      <Heading variant="page-heading">{title}</Heading>
      <Box>
        <Heading variant="chart-heading" ref={priceRef} />
        <Text
          variant="bold-text"
          display="inline-block"
          ref={priceChangeRef}
        ></Text>{' '}
        <Text display="inline-block">{'All Time'}</Text>
      </Box>
      <br />
      <Box width="600px">
        <LineChart
          width={600}
          height={300}
          data={data.map((d) => ({ ...d, date: formatDate(new Date(d.date)) }))}
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
      </Box>
    </VStack>
  );
};

export { Chart };
