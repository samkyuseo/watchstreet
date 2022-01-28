import { Box, Flex, Text } from '@chakra-ui/react';
import { NONAME } from 'dns';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
}

const WatchCollectionTable = ({ watches }: IWatchCollectionTableProps) => {
  return (
    <Box
      height='80vh'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
      overflowX='hidden'
      overflowY='auto'
      // hide scroll bar
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
      }}
    >
      {/* Header */}
      <Flex borderBottom='1px' borderColor='gray.200' width='100%' p='10px'>
        <Text variant='bold-text' fontSize='lg'>
          Watches
        </Text>
      </Flex>
      {/* Table content */}
      <Box>
        {watches.map((watch, index) => {
          return <WatchTableItem key={index} {...watch} />;
        })}
      </Box>
    </Box>
  );
};

export { WatchCollectionTable };
