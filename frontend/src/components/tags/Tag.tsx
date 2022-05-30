import { Center, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ITagProps {
  image: string;
  text: string;
  id: number;
}

const Tag = ({ image, text, id }: ITagProps) => {
  const navigate = useNavigate();
  return (
    <Center
      border="1px"
      borderColor="gray.200"
      borderRadius="30px"
      pl="9px"
      pr="15px"
      py="5px"
      style={{ gap: 10 }}
      _hover={{ backgroundColor: 'gray.50' }}
      onClick={() => {
        navigate(`/lists/watchvalue/${id}`);
      }}
    >
      <Image src={image} boxSize="28px" borderRadius="20px" objectFit="cover" />
      <Text color="black" mt="2px" fontSize="15px">
        {text}
      </Text>
    </Center>
  );
};

export { Tag };
