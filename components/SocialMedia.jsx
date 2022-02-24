// Components
import {
  Wrap,
  Box,
  Button,
  Heading,
  Skeleton,
  useColorModeValue,
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
import { useRouter } from 'next/router';

// TODO: color glitch
const SocialMedia = ({ title, }) => {
  const { data: socials, isLoading } = useQuery('socials', fetchSocialMedia);
  const router = useRouter();

  // Styles
  const flavorColor = useColorModeValue('#309795', '#4FD1C');

  const renderIcon = (platform) => {
    switch (platform) {
      case 'Spotify':
        return <Spotify color={flavorColor} />;
      case 'Twitter':
        return <Twitter color={flavorColor} />;
      case 'Instagram':
        return <Instagram color={flavorColor} />;
      case 'GitHub':
        return <GitHub color={flavorColor} />;
      case 'LinkedIn':
        return <LinkedIn color={flavorColor} />;
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
              onClick={() => router.push(item.link)}
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