import { Container, Box, Text, HStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Image } from '@chakra-ui/image';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <Box
      position='fixed'
      top={0}
      borderBottom='1px solid'
      borderColor='gray.100'
      display='flex'
      width='100%'
      bg='white'
      zIndex={1000}
    >
      <Container display='flex' maxWidth='90%' paddingY='10px'>
        <HStack flex='1' justifyContent='left'>
          <Image src='logo.svg' boxSize='40px' />
        </HStack>
        <HStack flex='4'>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<BsSearch color='gray' />}
            />
            <Input
              variant='outline'
              placeholder='Search watches'
              maxWidth='80%'
              focusBorderColor='gray'
            />
          </InputGroup>
        </HStack>
        <HStack flex='4' justifyContent='right'>
          <Text mx='20px' variant='bold'>
            Collection
          </Text>
          <Text mx='20px' variant='bold'>
            Account
          </Text>
        </HStack>
      </Container>
    </Box>
  );
};

export { Navbar };
