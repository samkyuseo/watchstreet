import { Box, Flex, Text } from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
}

const WatchCollectionTable = ({ watches }: IWatchCollectionTableProps) => {
  return (
    <Box
      position='sticky'
      width='400px'
      height='80vh'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      {/* Header */}
      <Flex borderBottom='1px' borderColor='gray.200' width='100%' p='10px'>
        <Text variant='bold-text' fontSize='lg'>
          Watches
        </Text>
      </Flex>
      {/* Table content */}
      {watches.map((watch, index) => {
        return <WatchTableItem key={index} {...watch} />;
      })}
      {/* Footer */}
      <Flex width='100%' p='23px' />
    </Box>
  );
};

export { WatchCollectionTable };
