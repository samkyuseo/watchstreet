import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchCollectionTableProps {
  watches: IWatchTableItemProps[];
}

const WatchCollectionTable = ({ watches }: IWatchCollectionTableProps) => {
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
      <Flex width='100%' p='10px'>
        <Text variant='bold-text' fontSize='lg'>
          Lists
        </Text>
      </Flex>
      <Accordion defaultIndex={[0]} allowMultiple fontFamily='barlow'>
        <AccordionItem>
          <h2>
            <AccordionButton _focus={{ outline: 0 }}>
              <Box flex='1' textAlign='left'>
                My Holy Grails
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _focus={{ outline: 0 }}>
              <Box flex='1' textAlign='left'>
                For my Wife
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat .
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export { WatchCollectionTable };
