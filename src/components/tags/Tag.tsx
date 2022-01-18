import { Center, Image, Text } from '@chakra-ui/react';

interface ITagProps {
  image: string;
  text: string;
}

const Tag = ({ image, text }: ITagProps) => {
  return (
    <Center
      border='1px'
      borderColor='gray.200'
      borderRadius='30px'
      pl='9px'
      pr='15px'
      py='5px'
      style={{ gap: 10 }}
    >
      <Image src={image} boxSize='28px' borderRadius='20px' objectFit='cover' />
      <Text color='black' mt='2px' fontSize='15px'>
        {text}
      </Text>
    </Center>
  );
};

export { Tag };
