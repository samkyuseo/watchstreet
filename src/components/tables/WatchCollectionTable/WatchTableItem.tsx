import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { formatPriceChangePercent, formatTwoDecimals } from '../../../functions/price';
import { IAvgPrice, ISpecs, IUserWatch2 } from '../../../types';
import { useEffect } from 'react';
import { getAvgPrices, getSpecs } from '../../../api/lib/watch';

interface IWatchTableItemProps {
  watch: IUserWatch2;
}

/** Generic table item to display watch data on table */
const WatchTableItem = ({ watch }: IWatchTableItemProps) => {
  const navigate = useNavigate();
  const [specs, setSpecs] = useState<ISpecs>();
  const [prices, setPrices] = useState<IAvgPrice[]>();

  useEffect(() => {
    const fetchData = async () => {
      const specs = await getSpecs(watch.watch_ref.id);
      setSpecs(specs);
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const prices = await getAvgPrices(watch.price_ref.id);
      setPrices(prices);
    };
    fetchData().catch(console.error);
  }, []);

  if (!prices || !specs) {
    return <></>;
  }
  const priceChange = prices[prices.length - 1].price - watch.purchase_price;
  const currentPrice = prices[prices.length - 1].price;
  return (
    <Flex
      borderColor='gray.200'
      width='100%'
      padding='10px'
      flexDirection='row'
      onClick={() => {
        navigate(`/watch/${watch.watch_ref.id}`);
      }}
      _hover={{ backgroundColor: 'gray.50' }}
    >
      <VStack align='left'>
        <Text variant='bold-text' fontSize='sm' width='100%' textAlign='left'>
          {specs.general.model_name}
        </Text>
        {1 && (
          <Text fontSize='sm' textAlign='left'>
            {specs.general.brand_name}
          </Text>
        )}
      </VStack>
      <Spacer />
      <VStack align='right'>
        <Text fontSize='sm' float='right'>
          ${formatTwoDecimals(currentPrice)}
        </Text>
        {priceChange >= 0 ? (
          <Text fontSize='sm' color='green.light' textAlign='right'>
            {formatPriceChangePercent(prices, priceChange)}
          </Text>
        ) : (
          <Text fontSize='sm' color='red' textAlign='right'>
            {formatPriceChangePercent(prices, priceChange)}
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export { WatchTableItem };
