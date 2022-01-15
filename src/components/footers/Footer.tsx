import { Container, Box, Text, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.svg';
const Footer = () => {
  return (
    <Box
      bottom={0}
      mt='50px'
      height='130px'
      borderTop='1px solid'
      borderColor='gray.100'
      bg='#f3f3f3'
      width='100%'
      position='fixed'
    >
      <Container maxWidth='70%' color='#6f6f6f'>
        <Flex marginTop='35px' justifyContent='space-between'>
          <Text>© Watchvalue Corporation</Text>
          <Text as='a' href='https://linkedin.com/in/samkyuseo'>
            💬 Contact Us
          </Text>
        </Flex>
        <Flex style={{ gap: 5 }}>
          <Image marginTop='17px' src={logo} boxSize='20px' />
          <Text marginTop='15px'>415 Mission St, San Francisco, CA 94105</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export { Footer };
