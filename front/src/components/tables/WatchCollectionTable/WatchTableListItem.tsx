import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import { IUserList } from '../../../../../types'
import { WatchTableItem } from './WatchTableItem'

const WatchTableListItem = ({ title, emoji, watches }: IUserList) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _focus={{ outline: 0 }}>
          <Box flex='1' textAlign='left' paddingY='10px'>
            {`${emoji}   ${title}`}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel p='0'>
        {watches.map((watch, index) => {
          return <WatchTableItem key={index} {...watch} />
        })}
      </AccordionPanel>
    </AccordionItem>
  )
}

export { WatchTableListItem }
