import { Flex, Text, VStack, Spacer } from '@chakra-ui/react';
import { WatchTableItem } from '../../types/watch';

interface ITableItemProps {
  watch: WatchTableItem;
}

const TableItem = ({ watch }: ITableItemProps) => {
  return (
    <Flex
      borderBottom='1px'
      borderColor='gray.200'
      width='100%'
      padding='10px'
      flexDirection='row'
    >
      <VStack alignItems='left'>
        <Text variant='bold' fontSize='sm'>
          {watch.modelName}
        </Text>
        <Text fontSize='sm'>{watch.numWatches} watches</Text>
      </VStack>
      <Spacer />
      <VStack alignItems='right'>
        <Text fontSize='sm'>${watch.price}</Text>
        {watch.priceChange >= 0 ? (
          <Text fontSize='sm' color='green.light'>
            +{watch.priceChange}%
          </Text>
        ) : (
          <Text fontSize='sm' color='red'>
            -{watch.priceChange}%
          </Text>
        )}
      </VStack>
    </Flex>
  );
};

export { TableItem };
