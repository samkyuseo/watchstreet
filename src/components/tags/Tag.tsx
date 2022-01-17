import { Flex, Image, Text } from '@chakra-ui/react';

interface ITagProps {
  image: string;
  text: string;
}

const Tag = ({ image, text }: ITagProps) => {
  return (
    <>
      <Flex
        border='1px'
        borderColor='gray.200'
        borderRadius='30px'
        pl='9px'
        pr='15px'
        py='5px'
        width='fit-content'
        display='flex'
        flexDirection='row'
        style={{ gap: 10 }}
      >
        <Image src={image} boxSize='30px' borderRadius='20px' />
        <Text color='black' mt='2px'>
          {text}
        </Text>
      </Flex>
    </>
  );
};

export { Tag };
