import {
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import macbook from '../../assets/images/macbook.png';

import { signInWithGoogle } from '../../functions/auth';
const LandingHero = () => {
  return (
    <Container maxWidth='70%' mt='100px' height='100%' marginBottom='100px'>
      <VStack spacing={5}>
        <Heading variant='hero-heading'>watchvalue.io</Heading>
        <Text variant='hero-text'>Robinhood but for watches.</Text>
        <Button onClick={signInWithGoogle} variant='pop' size='xl'>
          Sign Up
        </Button>
        <Image src={macbook} marginBotton='100px' />
      </VStack>
    </Container>
  );
};

export { LandingHero };
