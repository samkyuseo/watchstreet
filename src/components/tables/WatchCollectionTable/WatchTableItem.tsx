import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const timeDelta = calculateTimeDelta(
    getLatestDate(watch.priceData),
    purchaseDate
  );

  let priceChange = calculatePriceChange(watch.priceData, timeDelta);
  let currentPrice = getLatestPrice(watch.priceData);
  if (numberOfWatches) {
    currentPrice *= numberOfWatches;
  }
  return (
    <Flex
      borderColor="gray.200"
      width="100%"
      padding="10px"
      flexDirection="row"
      onClick={() => {
        navigate(`/watch/${watch.id}`);
      }}
      _hover={{ backgroundColor: 'gray.50' }}
    >
      <VStack align="left">
        <Text variant="bold-text" fontSize="sm" width="100%" textAlign="left">
          {watch.specs.model}
        </Text>
        {numberOfWatches && (
          <Text fontSize="sm" textAlign="left">
            {numberOfWatches} Watches
          </Text>
        )}
      </VStack>
      <Spacer />
      <VStack align="right">
        <Text fontSize="sm" float="right">
          ${formatTwoDecimals(currentPrice)}
        </Text>
        {priceChange >= 0 ? (
          <Text fontSize="sm" color="green.light" textAlign="right">
            {formatPriceChangePercent(watch.priceData, priceChange)}
          </Text>
        ) : (
          <Text fontSize="sm" color="red" textAlign="right">
            {formatPriceChangePercent(watch.priceData, priceChange)}
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export { WatchTableItem };
