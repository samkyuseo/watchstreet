import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';

interface IWatchTableItemProps {
  modelName: string;
  numWatches: number;
  price: number;
  priceChange: number;
}

const WatchTableItem = ({
  modelName,
  numWatches,
  price,
  priceChange,
}: IWatchTableItemProps) => {
  return (
    <Flex
      borderBottom='1px'
      borderColor='gray.200'
      width='100%'
      padding='10px'
      flexDirection='row'
    >
      <VStack alignItems='left'>
        <Text variant='bold-text' fontSize='sm'>
          {modelName}
        </Text>
        <Text fontSize='sm'>{numWatches} watches</Text>
      </VStack>
      <Spacer />
      <VStack alignItems='right'>
        <Text fontSize='sm'>${price}</Text>
        {priceChange >= 0 ? (
          <Text fontSize='sm' color='green.light'>
            +{priceChange}%
          </Text>
        ) : (
          <Text fontSize='sm' color='red'>
            -{priceChange}%
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export { WatchTableItem };
export type { IWatchTableItemProps };
