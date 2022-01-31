import { Box, Flex, Text, Accordion } from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  WatchTableListItem,
  IWatchTableListItemProps,
} from './WatchTableListItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
  watchLists: IWatchTableListItemProps[];
}

const WatchCollectionTable = ({
  watches,
  watchLists,
}: IWatchCollectionTableProps) => {
  return (
    <Box
      // make content always 80% of the vh
      height='80vh'
      // make content scrollable
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
      // border settings
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
      {/* List Header */}
      <Flex width='100%' p='10px' justifyContent='space-between'>
        <Text variant='bold-text' fontSize='lg'>
          Lists
        </Text>
        <Flex marginY='auto' marginRight='8px'>
          <AiOutlinePlus />
        </Flex>
      </Flex>
      <Accordion defaultIndex={[0]} allowMultiple fontFamily='barlow'>
        {watchLists.map((watchList, index) => {
          return (
            <WatchTableListItem
              title={watchList.title}
              emoji={watchList.emoji}
              watches={watchList.watches}
              key={index}
            />
          );
        })}
      </Accordion>
    </Box>
  );
};

export { WatchCollectionTable };
