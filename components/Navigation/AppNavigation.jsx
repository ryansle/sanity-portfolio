// Components
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ children, ...rest }) => {
  return (
    <Box>
      <Header />
      <Box
        mt='100px'
        minHeight='800px'
        px={['20px', '75px', '200px']}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default AppNavigation;
