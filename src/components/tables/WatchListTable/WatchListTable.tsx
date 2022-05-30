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
import { AiOutlinePlus } from 'react-icons/ai';
import {
  calculatePriceChange,
  calculatePriceChangePerent,
  formatTwoDecimals,
  getLatestPrice,
} from '../../../functions/price';
import { IWatch } from '../../../types';

interface IWatchListTableProps {
  watches: IWatch[];
}

const WatchListTable = ({ watches }: IWatchListTableProps) => {
  return (
    <Table width="100%">
      <Thead>
        <Tr>
          <Th px="0" fontFamily="barlow" width="300px">
            Model and Company
          </Th>
          <Th px="0" textAlign="center" fontFamily="barlow" width="100px">
            Reference
          </Th>
          <Th px="0" textAlign="center" fontFamily="barlow" width="100px">
            Price
          </Th>
          <Th px="0" textAlign="center" fontFamily="barlow" width="100px">
            This Week
          </Th>
          <Th px="0" textAlign="center" fontFamily="barlow" width="100px"></Th>
        </Tr>
      </Thead>
      <Tbody>
        {watches.map((watch, index) => {
          return (
            <Tr key={index}>
              <Td px="0" fontFamily="barlow">
                <Text color="black" fontSize="14px" variant="bold-text">
                  {watch.specs.model}
                </Text>
                <Text fontSize="12px" color="black">
                  {watch.specs.brand}
                </Text>
              </Td>
              <Td px="0" textAlign="center" fontFamily="barlow" fontSize="14px">
                {watch.specs.referenceNumber}
              </Td>
              <Td px="0" textAlign="center" fontFamily="barlow" fontSize="14px">
                ${formatTwoDecimals(getLatestPrice(watch.priceData))}
              </Td>
              <Td px="0" textAlign="center" fontFamily="barlow" fontSize="14px">
                <StatHelpText>
                  {calculatePriceChange(watch.priceData, 7) > 0 ? (
                    <StatArrow type="increase" />
                  ) : (
                    <StatArrow type="decrease" />
                  )}
                  {'  '}
                  {formatTwoDecimals(
                    Math.abs(calculatePriceChangePerent(watch.priceData, 7))
                  )}
                  %
                </StatHelpText>
              </Td>
              <Td>
                <AiOutlinePlus />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export { WatchListTable };
