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
      'hero-heading-mobile': {
        fontSize: '35px',
      },
      'card-heading': {
        fontSize: '18px',
      },
      'section-heading': {
        fontSize: '26px',
      },
      'chart-heading': {
        fontSize: '38px',
      },
      'chart-heading-mobile': {
        fontSize: '28px',
      },
      'page-heading': {
        fontSize: '38px',
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
      'hero-text-mobile': {
        fontWeight: 500,
        fontSize: '20px',
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
        _hover: { backgroundColor: 'green.lighter' },
        _active: {
          backgroundColor: 'green.lighter',
        },
      },
      outline: {
        bgColor: 'transparent',
        borderColor: 'green.light',
        fontFamily: 'barlow',
        _hover: { backgroundColor: 'green.alpha' },
        _active: {
          backgroundColor: 'green.alpha',
        },
      },
      'chart-time-delta': {
        background: 'transparent',
        _hover: { backgroundColor: 'transparent' },
      },
      'chart-time-delta-focus': {
        background: 'transparent',
        _hover: { backgroundColor: 'transparent' },
        backgroundColor: 'transparent',
        color: 'green.light',
        textDecoration: 'underline',
        textUnderlineOffset: '17px',
        textDecorationThickness: '2px',
      },
    },
  },
};

const colors = {
  green: {
    dark: '#1CB68B',
    light: '#24E5AF',
    lighter: '#50f2c5',
    alpha: '#50f2c532',
  },
};

export const theme = extendTheme({ colors, components });

// variant="bold-text"
//             color="green.light"
//             textDecoration="underline"
//             textUnderlineOffset="13px"
//             textDecorationThickness="2px"
