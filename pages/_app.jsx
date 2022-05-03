// Utilities
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';
import theme from '../styles/theme';
import seo from '../seo.config';

const queryClient = new QueryClient();

const Portfolio = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Portfolio;
