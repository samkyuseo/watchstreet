import { Box, Flex, Text } from '@chakra-ui/react';
import { TableItem } from './TableItem';

interface IWatchTableItem {
  modelName: string;
  numWatches: number;
  price: number;
  priceChange: number;
}

interface ITableProps {
  watches: IWatchTableItem[];
}

const WatchCollectionTable = ({ watches }: ITableProps) => {
  return (
    <Box
      minWidth='300px'
      minHeight='390px'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
    >
      <Flex borderBottom='1px' borderColor='gray.200' width='100%' p='10px'>
        <Text variant='bold-text' fontSize='lg'>
          Watches
        </Text>
      </Flex>
      {watches.map((watch, index) => {
        return <TableItem key={index} watch={watch}></TableItem>;
      })}
    </Box>
  );
};

export { WatchCollectionTable };
