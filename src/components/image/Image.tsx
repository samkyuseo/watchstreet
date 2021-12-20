import { Image as Image_Chakra } from "@chakra-ui/react";
const Image = () => {
  return (
    <Image_Chakra
      width="300px"
      height="100%"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      src="images/patek.jpg"
      objectFit="contain"
    />
  );
};

export { Image };
