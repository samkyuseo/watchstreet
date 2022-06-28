import { Container, Box, HStack, Flex, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { signInWithGoogle } from '../../functions/auth';
import logo from '../../assets/images/logo.svg';
const LandingNavbar = () => {
  return (
    <Box
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
          <Image src={logo} width="90px" />
          <Flex style={{ gap: '20px' }}>
            {/* Gone until website is live */}
            {/* <Button variant="minimal" onClick={signInWithGoogle}>
              Login
            </Button>
            <Button variant="pop" onClick={signInWithGoogle}>
              Sign Up
            </Button> */}
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export { LandingNavbar };
