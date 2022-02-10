// Components
import { Center, Text, Box, chakra, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const flavorText = useColorModeValue('teal.500', 'teal.300');

  return (
    <Center
      as='footer'
      align='center'
      py='50px'
      mt='30px'
    >
      <Box>
        <Text fontSize='md'>
          Designed and developed by Ryan Le.
        </Text>
        <Text fontSize='md'>
          Hosted on <chakra.span color={flavorText} fontWeight='semibold'>Vercel.</chakra.span> Built with <chakra.span color={flavorText} fontWeight='semibold'>Chakra UI</chakra.span> components.
        </Text>
      </Box>
    </Center>
  );
};

export default Footer;
