import { useNavigate } from 'react-router-dom';
import { Container, Box, HStack, Flex, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.svg';
const LandingNavbar = () => {
  const navigate = useNavigate();
  return (
    <Box
      top='0'
      borderBottom='1px solid'
      borderColor='gray.100'
      display='flex'
      width='100%'
      backgroundColor='white'
      zIndex='1000'
    >
      <Container display='flex' maxWidth='90%' paddingY='10px'>
        <HStack display='flex' width='100%' justifyContent='space-between'>
          <Image src={logo} width='75px' />
          <Flex style={{ gap: '20px' }}>
            <Button variant='outline' onClick={() => navigate('login')}>
              Login
            </Button>
            <Button variant='pop' onClick={() => navigate('signup')}>
              Sign Up
            </Button>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export { LandingNavbar };
