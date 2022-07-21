import { Box, Text, Divider, Heading } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
import { ISpecs } from '../../../../types';

interface ISpecsProps {
  specs: ISpecs;
}

const userFriendly: { [key: string]: string } = {
  brand_name: 'Brand',
  model_name: 'Model',
  model_number: 'Reference',
  years_released: 'Years Released',
  years_stopped: 'Years Stopped',
  case_materials: 'Case Materials',
  case_back: 'Case Back',
  case_size: 'Case Size',
  case_thickness: 'Case Thickness',
  bezel_materials: 'Bezel Materials',
  bezel_insert_materials: 'Bezel Insert Materials',
  bezel_features: 'Bezel Features',
  base_caliber: 'Base Caliber',
  manuf_caliber: 'Manufacturer Caliber',
  movement_type: 'Movement Type',
  calendar_type: 'Calendar Type',
  power_reserve: 'Power Reserve',
  complications: 'Complications',
  band_materials: 'Band Materials',
  lug_width: 'Lug Width',
  bracelet_name: 'Bracelet Name',
};

const Specs = ({ specs }: ISpecsProps) => {
  return (
    <>
      <Heading variant="spec-heading">General</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing="10px">
        {Object.entries(specs['general']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Case</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing="10px">
        {Object.entries(specs['case']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Movement</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing="10px">
        {Object.entries(specs['movement']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
      <Heading variant="spec-heading">Bracelet</Heading>
      <Divider marginY="10px" />
      <SimpleGrid columns={{ sm: 2, md: 2 }} spacing="10px">
        {Object.entries(specs['bracelet']).map(
          (value, index) =>
            value[1] && (
              <Box key={index} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </Box>
            )
        )}
      </SimpleGrid>
    </>
  );
};

export { Specs };
