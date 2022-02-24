// Components
import { Box, Spinner, Heading, useColorModeValue } from '@chakra-ui/react';

const Loader = ({ text }) => {
  const spinnerColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box align='center'>
      <Spinner
        thickness='20px'
        speed='0.8s'
        color={spinnerColor}
        boxSize='150px'
        mb={10}
      />
      <Heading fontWeight='semibold'>
        {text}
      </Heading>
    </Box>
  );
};

export default Loader;
