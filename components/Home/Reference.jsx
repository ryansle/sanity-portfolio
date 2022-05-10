// Components
import { Box, Text, Image, useColorModeValue } from '@chakra-ui/react';

const Reference = ({ imgPath, name, title, referral }) => {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      borderWidth='1px'
      boxShadow='lg'
      borderRadius={10}
      p={5}
      bg={bgColor}
    >
      <Box display='flex' mb={3}>
        <Image
          src={imgPath}
          borderRadius='full'
          width={50}
          height={50}
        />

        <Box ml={5}>
          <Text fontSize='lg' fontWeight={600}>
            {name}
          </Text>

          <Text color='gray'>
            {title}
          </Text>
        </Box>
      </Box>

      <Text >
        {referral}
      </Text>
    </Box>
  );
};

export default Reference;