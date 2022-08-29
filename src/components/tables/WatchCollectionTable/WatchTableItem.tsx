import { useState } from 'react';
import { Flex, Text, VStack, Spacer, useDisclosure } from '@chakra-ui/react';
import { formatPriceChangePercent, formatTwoDecimals } from '../../../functions/price';
import { IAvgPrice, ISpecs, IUserWatch2 } from '../../../types';
import { useEffect } from 'react';
import { getAvgPrices, getSpecs } from '../../../api/lib/watch';
import { NavOrDelModal } from '../../modals/NavOrDelModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

interface IWatchTableItemProps {
  watch: IUserWatch2;
}

/** Generic table item to display watch data on table */
const WatchTableItem = ({ watch }: IWatchTableItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [specs, setSpecs] = useState<ISpecs>();
  const [prices, setPrices] = useState<IAvgPrice[]>();
  const [user] = useAuthState(getAuth());

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

  if (!prices || !specs || !user) {
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
      onClick={onOpen}
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
            {formatPriceChangePercent(currentPrice, priceChange)}
          </Text>
        ) : (
          <Text fontSize='sm' color='red' textAlign='right'>
            {formatPriceChangePercent(currentPrice, priceChange)}
          </Text>
        )}
      </VStack>
      <NavOrDelModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        specs={specs}
        userId={user.uid}
        userWatch={watch}
        watchId={watch.watch_ref.id}
        priceChange={priceChange}
        currentPrice={currentPrice}
      />
    </Flex>
  );
};

export { WatchTableItem };
