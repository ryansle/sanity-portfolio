// Components
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ enableTransition, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Header enableTransition={enableTransition} />
      <Box
        mt='200px'
        minHeight='800px'
        px={['20px', '75px', '75px', '200px']}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default AppNavigation;
