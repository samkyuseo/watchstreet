import { Box, Text, Divider, Heading } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
import { IWatchSpecs2 } from '../../../../types';

interface ISpecsProps {
  specs: IWatchSpecs2;
}

const Specs = ({ specs }: ISpecsProps) => {
  return (
    <>
      <Heading variant="spec-heading">General</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="10px">
        {Object.entries(specs['general']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text variant="bold-text">{value[0]}</Text>
                <Text>{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Case</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="10px">
        {Object.entries(specs['case']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text variant="bold-text">{value[0]}</Text>
                <Text>{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Movement</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="10px">
        {Object.entries(specs['movement']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text variant="bold-text">{value[0]}</Text>
                <Text>{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Bracelet</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="10px">
        {Object.entries(specs['bracelet']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text variant="bold-text">{value[0]}</Text>
                <Text>{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
    </>
  );
};

export { Specs };
