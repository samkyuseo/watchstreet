import { Box, Text, Heading, Image, HStack, Divider } from '@chakra-ui/react';

interface IArticleProps {
  company: string;
  heading: string;
  article: string;
  image: string;
}

const Article = ({ company, heading, article, image }: IArticleProps) => {
  return (
    <>
      <Box _hover={{ backgroundColor: 'gray.50' }} py='20px'>
        <Text variant='card-company-text' mb='20px'>
          {company}
        </Text>
        <HStack spacing='50px'>
          <Box width='350px' minHeight='200px'>
            <Heading variant='card-heading' mb='20px'>
              {heading}
            </Heading>
            <Text variant='card-text' mb='20px'>
              {article}
            </Text>
          </Box>
          <Image
            width='200px'
            minHeight='200px'
            objectFit='cover'
            borderRadius='5px'
            src={image}
          />
        </HStack>
      </Box>
      <Box>
        <Divider width='100%' />
      </Box>
    </>
  );
};

export { Article };
