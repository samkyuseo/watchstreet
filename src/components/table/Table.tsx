import { Box, Flex, Text } from '@chakra-ui/react';
import { TableItem } from './TableItem';
import { WatchTableItem } from '../../types/watch';

interface ITableProps {
  watches: WatchTableItem[];
}

const Table = ({ watches }: ITableProps) => {
  return (
    <Box
      minWidth='300px'
      minHeight='390px'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
    >
      <Flex borderBottom='1px' borderColor='gray.200' width='100%' p='10px'>
        <Text variant='bold' fontSize='lg'>
          Your Collection
        </Text>
      </Flex>
      {watches.map((watch, index) => {
        return <TableItem key={index} watch={watch}></TableItem>;
      })}
    </Box>
  );
};

export { Table };
