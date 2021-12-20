import { Container, Box, HStack, Flex, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { signInWithGoogle } from "../../functions/auth";

const LandingNavbar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      borderBottom="1px solid"
      borderColor="gray.100"
      display="flex"
      width="100%"
      backgroundColor="white"
      zIndex="1000"
    >
      <Container display="flex" maxWidth="90%" paddingY="10px">
        <HStack display="flex" width="100%" justifyContent="space-between">
          <Image src="images/logo.svg" boxSize="40px" />
          <Flex style={{ gap: "20px" }}>
            <Button variant="minimal" onClick={signInWithGoogle}>
              Login
            </Button>
            <Button variant="pop" onClick={signInWithGoogle}>
              Sign Up
            </Button>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export { LandingNavbar };
