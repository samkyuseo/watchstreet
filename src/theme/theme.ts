import { extendTheme } from '@chakra-ui/react';

const components = {
  Heading: {
    baseStyle: {
      fontFamily: 'barlow',
      fontWeight: 900,
    },
  },
  Text: {
    baseStyle: {
      fontFamily: 'barlow',
    },
    variants: {
      bold: {
        fontWeight: 800,
      },
    },
  },
  Input: {
    baseStyle: {
      field: {
        fontFamily: 'barlow',
      },
    },
  },
};

const colors = {
  green: {
    dark: '#1CB68B',
    light: '#24E5AF',
  },
};

export const theme = extendTheme({ components, colors });
