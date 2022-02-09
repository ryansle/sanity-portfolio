// Components
import {
  Stack,
  Box,
  Button,
  Heading
} from '@chakra-ui/react';
import {
  AiFillInstagram as Instagram,
  AiFillGithub as GitHub,
  AiFillLinkedin as LinkedIn,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { FaSpotify as Spotify } from 'react-icons/fa';

// Utilities
import { fetchSocialMedia } from '../data/fetch';
import { useQuery } from 'react-query';

const SocialMedia = ({ title, }) => {
  const { data: socials, isLoading } = useQuery('socials', fetchSocialMedia);

  console.log(socials);

  const renderIcon = (platform) => {
    switch (platform) {
      case 'Spotify':
        return <Spotify color='#4FD1C5' />;
      case 'Twitter':
        return <Twitter color='#4FD1C5' />;
      case 'Instagram':
        return <Instagram color='#4FD1C5' />;
      case 'GitHub':
        return <GitHub color='#4FD1C5' />;
      case 'LinkedIn':
        return <LinkedIn color='#4FD1C5' />;
      default:
        return;
    };
  };

  return (
    <Box>
      <Heading
        mt={10}
        fontSize='3xl'
        mb={5}
      >
        {title}
      </Heading>

      <Stack direction='row' spacing={3}>
        {socials?.map((item) => (
          // TODO: hover effect
          <Button
            key={item.platform}
            leftIcon={renderIcon(item.platform)}
          >
            {item.platform}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default SocialMedia;