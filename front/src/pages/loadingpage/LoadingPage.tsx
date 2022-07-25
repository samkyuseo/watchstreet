import { Center, Spinner } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <Center height='100vh' width='100vw'>
      <Spinner size='xl' color='green.light' />
    </Center>
  )
}

export { LoadingPage }
