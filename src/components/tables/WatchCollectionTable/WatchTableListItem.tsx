import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { WatchTableItem, IWatchTableItemProps } from './WatchTableItem';

interface IWatchTableListItemProps {
  title: string;
  emoji: string;
  watches: IWatchTableItemProps[];
}

const WatchTableListItem = ({
  title,
  emoji,
  watches,
}: IWatchTableListItemProps) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple fontFamily="barlow">
      <AccordionItem>
        <h2>
          <AccordionButton _focus={{ outline: 0 }}>
            <Box flex="1" textAlign="left" paddingY="10px">
              {`${emoji}   ${title}`}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel p="0">
          {watches.map((watch, index) => {
            return <WatchTableItem key={index} {...watch} />;
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export { WatchTableListItem };
export type { IWatchTableListItemProps };
