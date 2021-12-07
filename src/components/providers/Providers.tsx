import { ReactChildren, ReactChild } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../theme/theme';

import '@fontsource/barlow';
import '@fontsource/inter';

interface IProviderProps {
  children: ReactChildren | ReactChild;
}
/**
 * @desc A componenet that encapsulates all providers for the app
 * @param children a react child
 */
export const Providers = ({ children }: IProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
