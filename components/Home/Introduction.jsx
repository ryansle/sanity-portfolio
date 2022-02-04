// Components
import {
  Slide,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  chakra
} from '@chakra-ui/react';

// Utilities
import { fetchSocialMedia } from '../../data/fetch';
import { useQuery } from 'react-query';

const Introduction = () => {
  const { data: socials, isLoading } = useQuery('socials', fetchSocialMedia);

  return (
    <Box>
      <Flex justify='space-between' align='center'>
        <Box>
          <Text
            variant='bolder'
            color='teal.300'
            mb={-3}
          >
            Hello, my name is...
          </Text>
          <Heading variant='huge'>
            Ryan Le
          </Heading>

          <Text variant='subtitle'>
            I'm currently a <chakra.span color='teal.300' fontWeight={600}>Web Engineer III</chakra.span> at American Express,
          </Text>
          <Text variant='subtitle'>
            working on all things front-end.
          </Text>

          <Box mt={10}>
            <Text variant='body' color='gray'>
              🚀 &nbsp; Exploring opportunities, side projects, freelancing and more.
            </Text>
            <Text variant='body' color='gray'>
              🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.
            </Text>
            <Text variant='body' color='gray'>
              🏙️  &nbsp; Currently based out of New York City.
            </Text>

            <Heading
              variant='subtitle'
              mt={10}
            >
              Connect with me on Social Media!
            </Heading>
          </Box>
        </Box>

        <Box mr={[0, '100px']}>
          <Image
            src='https://i.imgur.com/TAchISX.jpg'
            width={450}
            borderRadius='full'
            boxShadow='md'
            mt={10}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Introduction;
