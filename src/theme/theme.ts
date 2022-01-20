import { extendTheme } from '@chakra-ui/react';

const components = {
  Heading: {
    baseStyle: {
      fontFamily: 'barlow',
      fontWeight: 900,
    },
    variants: {
      'hero-heading': {
        fontSize: '52px',
      },
      'card-heading': {
        fontSize: '18px',
      },
      'section-heading': {
        fontSize: '26px',
      },
    },
  },
  Text: {
    baseStyle: {
      fontFamily: 'barlow',
      color: '#6f6f6f',
    },
    variants: {
      'bold-text': {
        color: 'black',
        fontWeight: 800,
      },
      'hero-text': {
        fontWeight: 500,
        fontSize: '24px',
      },
      'card-company-text': {
        color: 'black',
        fontWeight: 800,
        fontSize: '14px',
      },
      'card-text': {
        fontSize: '14px',
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
  Button: {
    baseStyle: {
      fontFamily: 'barlow',
      _focus: { boxShadow: 'none' },
      borderRadius: '50px',
    },
    sizes: {
      xl: {
        fontSize: '24px',
        paddingY: '10px',
        paddingX: '40px',
      },
    },
    variants: {
      minimal: {
        background: 'transparent',
        _hover: { backgroundColor: 'transparent' },
        _active: {
          backgroundColor: 'transparent',
          color: 'green.light',
        },
        _focus: { color: 'green.dark' },
      },
      pop: {
        bgColor: 'green.light',
        fontFamily: 'barlow',
        _hover: { backgroundColor: 'green.dark' },
        _active: {
          backgroundColor: 'green.dark',
        },
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

export const theme = extendTheme({ colors, components });
