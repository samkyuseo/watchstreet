import {
  Container,
  Heading,
  Text,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
const LandingHero = () => {
  return (
    <Container maxWidth="70%" mt="100px" height="100%" marginBottom="100px">
      <VStack spacing={5}>
        <Heading variant="hero-heading">watchvalue.io</Heading>
        <Text variant="hero-text">
          Daily price updates on your entire watch collection
        </Text>
        <Button variant="pop" size="xl">
          Sign Up
        </Button>
        <Image src="images/macbook.png" marginBotton="100px" />
      </VStack>
    </Container>
  );
};

export { LandingHero };
