// Components
import Input from './components/Input';

// Utilities
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '400px', // Phone Screen
  md: '800px', // Tablet
  lg: '1280px', // Regular Laptop
  xl: '1600px'
});

const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const components = { Input };

const theme = extendTheme({
  config,
  breakpoints,
  components,
  fontSizes: {
    display: fluidType(80, 120),
    display2: fluidType(36, 48),
    display3: fluidType(24, 36),
    display4: fluidType(16, 24),
  },
});

export default theme;
