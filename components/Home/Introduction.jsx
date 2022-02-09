// Components
import {
  Slide,
  Box,
  Heading,
  Text,
  Image,
  chakra,
  Wrap,
  Stack
} from '@chakra-ui/react';
import SocialMedia from '../SocialMedia';

const Introduction = () => {
  return (
    <Box>
      <Wrap justify='space-between' align='center'>
        <Box width={['100%', '50%']}>
          <Text
            color='teal.300'
            mb={-3}
            fontSize='display2'
            fontWeight='semibold'
          >
            Hello, I'm...
          </Text>
          <Heading fontSize='display'>
            Ryan Le
          </Heading>

          <Text fontSize='display3'>
            I'm currently a <chakra.span color='teal.300' fontWeight={600}>Web Engineer III</chakra.span> at American Express, working on all things front-end.
          </Text>

          <Stack mt={10}>
            <Text color='gray'>
              🚀 &nbsp; Exploring opportunities, side projects, freelancing and more.
            </Text>
            <Text color='gray'>
              🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.
            </Text>
            <Text color='gray'>
              🏙️  &nbsp; Currently based out of New York City.
            </Text>

            <SocialMedia title='Connect with me on Social Media!' />
          </Stack>
        </Box>

        <Box
          width={['100%', '40%']}
          align='right'
          pr={[0, 0, 0, 10]}
        >
          <Image
            src='https://i.imgur.com/TAchISX.jpg'
            width={450}
            height='auto'
            borderRadius='full'
            boxShadow='md'
            mt={10}
          />
        </Box>
      </Wrap>
    </Box>
  );
};

export default Introduction;
