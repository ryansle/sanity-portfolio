// Components
import { Center, Text, Box, chakra } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center
      as='footer'
      py={10}
      align='center'
    >
      <Box>
        <Text fontSize='md'>
          Designed and developed by Ryan Le.
        </Text>
        <Text fontSize='md'>
          Hosted on <chakra.span color='teal.300'>Vercel.</chakra.span> Built with <chakra.span color='teal.300'>Chakra UI</chakra.span> components.
        </Text>
      </Box>
    </Center>
  );
};

export default Footer;
