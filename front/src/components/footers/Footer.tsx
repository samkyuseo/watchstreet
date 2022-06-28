import { Container, Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/images/favicon.svg';
const Footer = () => {
  return (
    <Box
      bottom={0}
      borderTop="1px solid"
      borderColor="gray.100"
      bg="#f3f3f3"
      width="100%"
      paddingY="35px"
    >
      <Container maxWidth="70%" color="#6f6f6f">
        <Flex justifyContent="space-between">
          <Flex style={{ gap: 5 }}>
            <Image marginTop="auto" src={logo} boxSize="25px" />
            <Text>Watchstreet</Text>
          </Flex>
          <Text as="a" target="_blank" href="https://linkedin.com/in/samkyuseo">
            💬 Contact
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export { Footer };
