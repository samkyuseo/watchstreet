import React from "react";
import { Container, Box, Text, Flex } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box
      bottom={0}
      mt="50px"
      height="130px"
      borderTop="1px solid"
      borderColor="gray.100"
      bg="#f3f3f3"
      width="100%"
    >
      <Container maxWidth="70%" color="#6f6f6f">
        <Flex marginTop="35px" justifyContent="space-between">
          <Text>© Watchvalue Corporation</Text>
          <Text as="a" href="https://linkedin.com/in/samkyuseo">
            💬 Contact Us
          </Text>
        </Flex>
        <Text marginTop="15px">415 Mission St, San Francisco, CA 94105</Text>
      </Container>
    </Box>
  );
};

export { Footer };
