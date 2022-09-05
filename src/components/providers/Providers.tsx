import { ReactNode, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../theme/theme';

import '@fontsource/barlow';
import '@fontsource/inter';
import '../../theme/algolia.css';
import { UpdateCollection } from './UpdateCollection';

interface IProps {
  children: ReactNode;
}
/**
 * @desc A componenet that encapsulates all providers for the app
 * @param children a react child
 */
export const Providers = ({ children }: IProps) => {
  const [value, setValue] = useState(0);
  return (
    <UpdateCollection.Provider value={{ value, setValue }}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraProvider>
    </UpdateCollection.Provider>
  );
};
