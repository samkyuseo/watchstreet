import { Box, Flex, Text } from '@chakra-ui/react';
import { WatchTableItem } from './WatchTableItem';
import { AiOutlinePlus } from 'react-icons/ai';

import { IUser2 } from '../../../types';

interface IWatchCollectionTableProps {
  userData?: IUser2;
}

const WatchCollectionTable = ({ userData }: IWatchCollectionTableProps) => {
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
      borderRadius='sm'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      {/* Watch Collection */}
      {userData ? (
        <>
          <Flex
            borderBottom='1px'
            borderColor='gray.200'
            justifyContent='space-between'
            width='100%'
            p='10px'
          >
            <Text variant='bold-text' fontSize='lg'>
              Collection
            </Text>
            <Flex marginY='auto' marginRight='8px'>
              <AiOutlinePlus />
            </Flex>
          </Flex>
          {/* Table content */}
          {userData.collection.map((watch, index) => {
            return <WatchTableItem key={index} watch={watch} />;
          })}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export { WatchCollectionTable };
