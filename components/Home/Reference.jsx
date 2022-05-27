// Components
import { Box, Text, Flex, Image, IconButton, useColorModeValue } from '@chakra-ui/react';
import { AiFillLinkedin as LinkedIn } from 'react-icons/ai';
import { EmailIcon as Email } from '@chakra-ui/icons';

// Utilities
import { useRouter } from 'next/router';

const Reference = ({ imgPath, name, title, referral, linkedin, email }) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const flavorColor = useColorModeValue('#309795', '#4FD1C');

  const router = useRouter();

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
          <Flex align='self-start'>
            <Text fontSize='lg' fontWeight={600}>
              {name}
            </Text>
            <Box display='flex' float='right' ml={3}>
              {linkedin && (
                <IconButton
                  icon={<LinkedIn color={flavorColor} />}
                  variant='ghost'
                  size='xs'
                  onClick={() => router.push(linkedin)}
                />
              )}
              {email && (
                <IconButton
                  icon={<Email color={flavorColor} />}
                  variant='ghost'
                  size='xs'
                  onClick={() => router.push(`mailto:${email}`)}
                />
              )}
            </Box>
          </Flex>

          <Text color='gray'>
            {title}
          </Text>
        </Box>
      </Box>

      <Text>
        {referral}
      </Text>
    </Box>
  );
};

export default Reference;