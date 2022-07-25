import { Box, Text, Heading, Image, Flex, Divider } from '@chakra-ui/react'

interface IArticleProps {
  company: string
  heading: string
  articleSnippet: string
  image: string
  url: string
}

const Article = ({ company, heading, articleSnippet, image, url }: IArticleProps) => {
  return (
    <>
      <Box
        _hover={{ backgroundColor: 'gray.50' }}
        py='20px'
        onClick={() => window.open(url, '_blank')}
      >
        <Text variant='card-company-text' mb='20px'>
          {company}
        </Text>
        <Flex justifyContent='space-between'>
          <Box maxWidth='400px' minHeight='200px'>
            <Heading variant='card-heading' mb='20px'>
              {heading}
            </Heading>
            <Text variant='card-text' mb='20px'>
              {articleSnippet}
            </Text>
          </Box>
          <Image width='200px' minHeight='200px' objectFit='cover' borderRadius='sm' src={image} />
        </Flex>
      </Box>
      <Box>
        <Divider width='100%' />
      </Box>
    </>
  )
}

export { Article }
