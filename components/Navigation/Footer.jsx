// Components
import { Center, Text, Box, chakra, Icon, useColorModeValue } from '@chakra-ui/react';
import {
  AiFillInstagram as Instagram,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { FaSpotify as Spotify } from 'react-icons/fa';

// Utilities
import { fetchSocialMedia } from '../../data/fetch';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

const Footer = () => {
  const { data: socials } = useQuery('socials', fetchSocialMedia);
  const router = useRouter();
  const flavorText = useColorModeValue('teal.500', 'teal.300');

  const renderSocial = (platform) => {
    switch (platform) {
      case 'GitHub':
        return GitHub;
      case 'Instagram':
        return Instagram;
      case 'LinkedIn':
        return LinkedIn;
      case 'Twitter':
        return Twitter;
      case 'Spotify':
        return Spotify;
    }
  };

  return (
    <Center
      as='footer'
      align='center'
      py='50px'
      mt='100px'
      borderTopWidth='1px'
    >
      <Box>
        <Center mb={3}>
          {socials?.map((item) => (
            <Icon
              color={flavorText}
              as={renderSocial(item.platform)}
              _hover={{
                color: 'teal'
              }}
              mx={1}
              cursor='pointer'
              variant='ghost'
              height='20px'
              width='20px'
              onClick={() => router.push(item.link)}
            />
          ))}
        </Center>
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
