import { Image as IMAGE_CHAKRA } from "@chakra-ui/react";
const Image = () => {
  return (
    <IMAGE_CHAKRA
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
