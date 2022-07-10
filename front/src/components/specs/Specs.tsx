import { Box, Text, Divider, Heading } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
import { IWatchSpecs } from '../../../../types';

interface ISpecsProps {
  watchSpecs: IWatchSpecs;
}

const Specs = ({ watchSpecs }: ISpecsProps) => {
  return (
    <>
      <Heading variant="section-heading">Specifications</Heading>
      <Divider marginY="20px" />
      <Text marginBottom="40px">{watchSpecs.description}</Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="10px">
        <Box height="80px">
          <Text variant="bold-text">Brand</Text>
          <Text>{watchSpecs.brand}</Text>
        </Box>
        <Box height="80px">
          <Text variant="bold-text">Model</Text>
          <Text>{watchSpecs.model}</Text>
        </Box>
        <Box height="80px">
          <Text variant="bold-text">Ref Number</Text>
          <Text>{watchSpecs.referenceNumber}</Text>
        </Box>
        <Box height="80px">
          <Text variant="bold-text">Year of Production</Text>
          <Text>{watchSpecs.yearOfProduction}</Text>
        </Box>
        <Box height="80px">
          <Text variant="bold-text">Case Material</Text>
          <Text>{watchSpecs.caseMaterial}</Text>
        </Box>
        <Box height="80px">
          <Text variant="bold-text">Bracelet Material</Text>
          <Text>{watchSpecs.braceletMaterial}</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export { Specs };
