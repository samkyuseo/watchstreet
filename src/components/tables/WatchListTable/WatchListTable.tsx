import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  StatArrow,
  StatHelpText,
  Text,
} from '@chakra-ui/react';
import { generateNeatVersion } from '../../../functions/num';

interface IWatchListTableItem {
  company: string;
  model: string;
  material: string;
  reference: string;
  price: number;
  percentChange: number;
}

interface IWatchListTableProps {
  watches: IWatchListTableItem[];
}

const WatchListTable = ({ watches }: IWatchListTableProps) => {
  return (
    <Table width='100%'>
      <Thead>
        <Tr>
          <Th px='0' fontFamily='barlow' width='300px'>
            Model and Company
          </Th>
          <Th px='0' textAlign='center' fontFamily='barlow' width='100px'>
            Reference
          </Th>
          <Th px='0' textAlign='center' fontFamily='barlow' width='100px'>
            Price
          </Th>
          <Th px='0' textAlign='right' fontFamily='barlow' width='100px'>
            This Week
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {watches.map(
          ({ company, model, reference, price, percentChange }, index) => {
            return (
              <Tr key={index}>
                <Td px='0' fontFamily='barlow'>
                  <Text color='black' fontSize='14px'>
                    {model}
                  </Text>
                  <Text fontSize='12px'>{company}</Text>
                </Td>
                <Td
                  px='0'
                  textAlign='center'
                  fontFamily='barlow'
                  fontSize='14px'
                >
                  {reference}
                </Td>
                <Td
                  px='0'
                  textAlign='center'
                  fontFamily='barlow'
                  fontSize='14px'
                >
                  ${generateNeatVersion(price)}
                </Td>
                <Td
                  px='0'
                  textAlign='right'
                  fontFamily='barlow'
                  fontSize='14px'
                >
                  <StatHelpText>
                    {percentChange > 0 ? (
                      <StatArrow type='increase' />
                    ) : (
                      <StatArrow type='decrease' />
                    )}
                    {'  '}
                    {percentChange < 0 ? percentChange * -1 : percentChange}%
                  </StatHelpText>
                </Td>
              </Tr>
            );
          }
        )}
      </Tbody>
    </Table>
  );
};

export { WatchListTable };
