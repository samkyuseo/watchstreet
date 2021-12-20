import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

import {
  Container,
  Heading,
  Skeleton,
  HStack,
  VStack,
  Box,
  Text,
  Flex,
  Divider,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { LineChart, Line } from "recharts";
import { Navbar } from "../../components/navbars/Navbar";
import { Footer } from "../../components/footers/Footer";

const ProfilePage = () => {
  const [user] = useAuthState(getAuth());
  return (
    <>
      <Navbar />
      <Container maxWidth="70%" mt="100px">
        <HStack css={{ gap: "40px" }}>
          <VStack alignItems="left">
            <Box>
              <Heading>$475,212.89</Heading>
              <Text variant="bold" display="inline-block">
                -$172.5 (-0.06%)
              </Text>{" "}
              <Text display="inline-block">Today</Text>
            </Box>
            <Box>
              <LineChart width={600} height={285} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#24E5AF"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
              <Flex style={{ gap: 50 }}>
                <Text
                  variant="bold"
                  color="green.light"
                  textDecoration="underline"
                  textUnderlineOffset="10px"
                  textDecorationThickness="2px"
                >
                  1D
                </Text>
                <Text variant="bold">1M</Text>
                <Text variant="bold">3M</Text>
                <Text variant="bold">1Y</Text>
                <Text variant="bold">ALL</Text>
              </Flex>
              <Divider
                mt="5px"
                width="600px"
                style={{ height: 0.1, backgroundColor: "black" }}
              />
            </Box>
          </VStack>
          <Box
            minWidth="300px"
            height="390px"
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
          </Box>
        </HStack>
      </Container>
      <Footer />
    </>
  );
};

export { ProfilePage };

const data = [
  {
    pv: 2400,
  },
  {
    pv: 1398,
  },
  {
    pv: 9800,
  },
  {
    pv: 3908,
  },
  {
    pv: 10000,
  },
  {
    pv: 9000,
  },
  {
    pv: 5679,
  },
  {
    pv: 30000,
  },
  {
    pv: 8000,
  },
  {
    pv: 10000,
  },
  {
    pv: 7000,
  },
  {
    pv: 12000,
  },
  {
    pv: 9000,
  },
  {
    pv: 20000,
  },
  {
    pv: 20000,
  },
  {
    pv: 10098,
  },
  {
    pv: 9800,
  },
  {
    pv: 15008,
  },
  {
    pv: 30000,
  },
  {
    pv: 40000,
  },
  {
    pv: 50000,
  },
];
