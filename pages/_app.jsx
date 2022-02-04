// Utilities
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

const Portfolio = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default Portfolio;
