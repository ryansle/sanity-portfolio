// Components
import { Box, useColorModeValue } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const AppNavigation = ({ enableTransition, children, ...rest }) => {
  const background = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box>
      <Box {...rest} bg={background} pb='100px'>
        <Header enableTransition={enableTransition} />
        <Box
          pt='150px'
          minHeight='79vh'
          px={['20px', '30px', '30px', '15vw']}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AppNavigation;
