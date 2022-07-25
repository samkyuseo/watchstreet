import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../../theme/theme'

import '@fontsource/barlow'
import '@fontsource/inter'

interface IProps {
  children: ReactNode
}
/**
 * @desc A componenet that encapsulates all providers for the app
 * @param children a react child
 */
export const Providers = ({ children }: IProps) => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  )
}
