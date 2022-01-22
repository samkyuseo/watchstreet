import { Box, Flex, Text } from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
}

const WatchCollectionTable = ({ watches }: IWatchCollectionTableProps) => {
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
        return <WatchTableItem key={index} {...watch} />;
      })}
    </Box>
  );
};

export { WatchCollectionTable };
