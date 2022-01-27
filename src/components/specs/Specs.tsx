import { Box, Text, Divider, Heading } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
const Specs = () => {
  return (
    <>
      <Heading variant='section-heading'>Specifications</Heading>
      <Divider marginY='20px' />
      <Text marginBottom='40px'>
        On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
        olive-green shade that is new to the Nautilus collection and which
        should delight lovers of this cult watch, an icon of sporting elegance.
        The highly recognizable design of the case, bezel and bracelet is
        enhanced by a subtle alternation between satinated and polished manual
        finishing. Inside this model water-resistant to 120m beats a
        self-winding caliber visible through a transparent sapphire crystal
        case-back.
      </Text>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='10px'>
        <Box height='80px'>
          <Text variant='bold-text'>Brand</Text>
          <Text>Patek Philippe</Text>
        </Box>
        <Box height='80px'>
          <Text variant='bold-text'>Model</Text>
          <Text>Nautilus 5711/1A-014</Text>
        </Box>
        <Box height='80px'>
          <Text variant='bold-text'>Ref Number</Text>
          <Text>5711/1A-014</Text>
        </Box>
        <Box height='80px'>
          <Text variant='bold-text'>Year of Production</Text>
          <Text>2021</Text>
        </Box>
        <Box height='80px'>
          <Text variant='bold-text'>Case Material</Text>
          <Text>Steel</Text>
        </Box>
        <Box height='80px'>
          <Text variant='bold-text'>Bracelet Material</Text>
          <Text>Steel</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};

export { Specs };
