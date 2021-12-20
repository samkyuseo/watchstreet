import { Navbar } from "../../components/navbars/Navbar";
import { Chart } from "../../components/charts/Chart";
import { Specs } from "../../components/specs/Specs";
import { Footer } from "../../components/footers/Footer";
import { Image } from "../../components/image/Image";
import { HStack } from "@chakra-ui/react";

import { Container } from "@chakra-ui/react";

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="70%" mt="100px">
        <HStack css={{ gap: 40 }}>
          <Chart />
          <Image />
        </HStack>
      </Container>
      <Specs />
      <Footer />
    </>
  );
};

export { WatchPage };
