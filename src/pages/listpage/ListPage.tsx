import { Navbar } from '../../components/navbars/Navbar';
import { Container, Text, Heading, Box, Table } from '@chakra-ui/react';
const ListPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='70%' mt='100px' mb='100px'>
        <Box width='600px' mt='40px'>
          <Heading>John Mayer's Collection</Heading>
          <Text mt='20px'>
            The following is John Mayer's watch collection based on all the
            latest media that we've gathered. Remember when the Rolex Cosmograph
            Daytona 116508 got nicknamed the John Mayer Daytona?
          </Text>
        </Box>
      </Container>
    </>
  );
};

export { ListPage };
