import {
  Container,
  HStack,
  VStack,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbars/Navbar";
import { Footer } from "../../components/footers/Footer";
import { Chart } from "../../components/charts/Chart";
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="70%" mt="100px">
        <HStack css={{ gap: "40px" }}>
          <Chart />
          <Box
            minWidth="300px"
            minHeight="390px"
            borderRadius="lg"
            border="1px"
            borderColor="gray.200"
          >
            <Flex
              borderBottom="1px"
              borderColor="gray.200"
              width="100%"
              p="10px"
            >
              <Text variant="bold" fontSize="lg">
                Your Collection
              </Text>
            </Flex>
            <Flex
              borderBottom="1px"
              borderColor="gray.200"
              width="100%"
              padding="10px"
              flexDirection="row"
            >
              <VStack alignItems="left">
                <Text variant="bold" fontSize="sm">
                  Rolex GMT Master II Pepsi
                </Text>
                <Text fontSize="sm">3 watches</Text>
              </VStack>
              <Spacer />
              <VStack alignItems="right">
                <Text fontSize="sm">$65,330</Text>
                <Text fontSize="sm" color="green.light">
                  +5.25%
                </Text>
              </VStack>
            </Flex>
            <Flex
              borderBottom="1px"
              borderColor="gray.200"
              width="100%"
              padding="10px"
              flexDirection="row"
            >
              <VStack alignItems="left">
                <Text variant="bold" fontSize="sm">
                  Patek Phillipe 5711-104A
                </Text>
                <Text fontSize="sm">1 watch</Text>
              </VStack>
              <Spacer />
              <VStack alignItems="right">
                <Text fontSize="sm">$350,330</Text>
                <Text fontSize="sm" color="green.light">
                  +22.25%
                </Text>
              </VStack>
            </Flex>
            <Flex
              borderBottom="1px"
              borderColor="gray.200"
              width="100%"
              padding="10px"
              flexDirection="row"
            >
              <VStack alignItems="left">
                <Text variant="bold" fontSize="sm">
                  Jaeger Le Coultre Reverso
                </Text>
                <Text fontSize="sm">1 watch</Text>
              </VStack>
              <Spacer />
              <VStack alignItems="right">
                <Text fontSize="sm">$20,330</Text>
                <Text fontSize="sm" color="red">
                  -22.25%
                </Text>
              </VStack>
            </Flex>
            <Flex
              borderBottom="1px"
              borderColor="gray.200"
              width="100%"
              padding="10px"
              flexDirection="row"
            >
              <VStack alignItems="left">
                <Text variant="bold" fontSize="sm">
                  Rolex Oyster Perpetual Tiffany Blue
                </Text>
                <Text fontSize="sm">1 watch</Text>
              </VStack>
              <Spacer />
              <VStack alignItems="right">
                <Text fontSize="sm">$20,330</Text>
                <Text fontSize="sm" color="red">
                  -22.25%
                </Text>
              </VStack>
            </Flex>
          </Box>
        </HStack>
      </Container>
      <Footer />
    </>
  );
};

export { ProfilePage };

// const data = [
//   {
//     pv: 2400,
//   },
//   {
//     pv: 1398,
//   },
//   {
//     pv: 9800,
//   },
//   {
//     pv: 3908,
//   },
//   {
//     pv: 10000,
//   },
//   {
//     pv: 9000,
//   },
//   {
//     pv: 5679,
//   },
//   {
//     pv: 30000,
//   },
//   {
//     pv: 8000,
//   },
//   {
//     pv: 10000,
//   },
//   {
//     pv: 7000,
//   },
//   {
//     pv: 12000,
//   },
//   {
//     pv: 9000,
//   },
//   {
//     pv: 20000,
//   },
//   {
//     pv: 20000,
//   },
//   {
//     pv: 10098,
//   },
//   {
//     pv: 9800,
//   },
//   {
//     pv: 15008,
//   },
//   {
//     pv: 30000,
//   },
//   {
//     pv: 40000,
//   },
//   {
//     pv: 50000,
//   },
// ];
