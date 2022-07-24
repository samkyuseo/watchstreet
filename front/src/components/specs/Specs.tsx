import { Box, Text, Divider, Heading, Grid, GridItem } from '@chakra-ui/layout';
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
      <Divider />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={Math.ceil(Object.keys(specs['general']).length / 2)}
          colSpan={2}
        >
          <Heading variant="spec-heading">GENERAL</Heading>
        </GridItem>
        {Object.entries(specs['general']).map(
          (value, index) =>
            value[1] && (
              <GridItem key={index} colSpan={2} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </GridItem>
            )
        )}
      </Grid>
      <Divider />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={Math.ceil(Object.keys(specs['case']).length / 2)}
          colSpan={2}
        >
          <Heading variant="spec-heading">CASE</Heading>
        </GridItem>
        {Object.entries(specs['case']).map(
          (value, index) =>
            value[1] && (
              <GridItem key={index} colSpan={2} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </GridItem>
            )
        )}
      </Grid>
      <Divider />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={Math.ceil(Object.keys(specs['movement']).length / 2)}
          colSpan={2}
        >
          <Heading variant="spec-heading">MOVEMENT</Heading>
        </GridItem>
        {Object.entries(specs['movement']).map(
          (value, index) =>
            value[1] && (
              <GridItem key={index} colSpan={2} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </GridItem>
            )
        )}
      </Grid>
      <Divider />
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={Math.ceil(Object.keys(specs['bracelet']).length / 2)}
          colSpan={2}
        >
          <Heading variant="spec-heading">BRACELET</Heading>
        </GridItem>
        {Object.entries(specs['bracelet']).map(
          (value, index) =>
            value[1] && (
              <GridItem key={index} colSpan={2} height="80px">
                <Text fontSize="13px">{userFriendly[value[0]]}</Text>
                <Text variant="bold-text">{value[1]}</Text>
              </GridItem>
            )
        )}
      </Grid>
    </>
  );
};
export { Specs };
