// Components
import {
  Wrap,
  Box,
  Button,
  Heading,
  Skeleton
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
  // TODO: Skeleton fallback with isLoading
  const { data: socials, isLoading } = useQuery('socials', fetchSocialMedia);

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

      <Wrap direction='row' spacing={3}>
        {isLoading && (
          Array(5).fill('').map((_, index) => (
            <Skeleton
              key={index}
              height='40px'
              borderRadius={10}
              width='110px'
            />
          ))
        )}

        {!isLoading && (
          socials?.map((item) => (
            <Button
              key={item.platform}
              leftIcon={renderIcon(item.platform)}
            >
              {item.platform}
            </Button>
          ))
        )}
      </Wrap>
    </Box>
  );
};

export default SocialMedia;