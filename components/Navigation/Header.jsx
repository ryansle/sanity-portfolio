// Components
import { Box, Slide, Flex, Heading } from '@chakra-ui/react';

const Header = ({ enableTransition }) => {
  return (
    <Slide
      direction='top'
      reverse
      in={true}
      transition={
        enableTransition
          ? { enter: { duration: 0.5, delay: 0.01 } }
          : { enter: { duration: 0, delay: 0 } }
      }
    >
      <Box
        zIndex={10}
        width='full'
        bg='gray.700'
        borderBottomWidth='1px'
        px={['20px', '120px']}
        py='25px'
      >
        <Flex>
          <Heading size='md'>
            RYAN S. LE
          </Heading>
        </Flex>
      </Box>
    </Slide>
  );
};

export default Header;
