// Components
import { Box, useColorModeValue } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ enableTransition, children, ...rest }) => {
  const background = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box {...rest} bg={background}>
      <Header enableTransition={enableTransition} />
      <Box
        pt='150px'
        minHeight='800px'
        px={['20px', '30px', '30px', '15vw']}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default AppNavigation;
