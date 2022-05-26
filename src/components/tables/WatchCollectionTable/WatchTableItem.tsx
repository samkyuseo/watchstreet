import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import {
  calculatePriceChange,
  getLatestPrice,
  formatPriceChangePercent,
  getLatestDate,
  formatTwoDecimals,
} from '../../../functions/price';
import { calculateTimeDelta } from '../../../functions/date';
import { IUserWatch } from '../../../types';

/** Generic table item to display watch data on table */
const WatchTableItem = ({
  watch,
  purchaseDate,
  numberOfWatches,
}: IUserWatch) => {
  const timeDelta = calculateTimeDelta(
    getLatestDate(watch.priceHistory),
    purchaseDate
  );

  let priceChange = calculatePriceChange(watch.priceHistory, timeDelta);
  let currentPrice = getLatestPrice(watch.priceHistory);
  if (numberOfWatches) {
    currentPrice *= numberOfWatches;
  }
  return (
    <Flex
      // borderBottom="1px"
      borderColor="gray.200"
      width="100%"
      padding="10px"
      flexDirection="row"
    >
      <VStack alignItems="left">
        <Text variant="bold-text" fontSize="sm">
          {watch.specs.model}
        </Text>
        <Text fontSize="sm">{numberOfWatches || 0} watches</Text>
      </VStack>
      <Spacer />
      <VStack>
        <Text fontSize="sm">${formatTwoDecimals(currentPrice)}</Text>
        {priceChange >= 0 ? (
          <Text fontSize="sm" color="green.light">
            {formatPriceChangePercent(watch.priceHistory, priceChange)}
          </Text>
        ) : (
          <Text fontSize="sm" color="red">
            {formatPriceChangePercent(watch.priceHistory, priceChange)}
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export { WatchTableItem };
