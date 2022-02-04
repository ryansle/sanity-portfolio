// Components
import Heading from './components/Heading';
import Text from './components/Text';

// Utilities
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '37.5em', // phoneScreen
  md: '48em',
  lg: '87.5em', // tabletScreen
});

const components = {
  Heading,
  Text,
};

const theme = extendTheme({
  config,
  breakpoints,
  components,
});

export default theme;
