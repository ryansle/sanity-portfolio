// Components
import {
  SlideFade,
  Box,
  Heading,
  Text,
  Image,
  chakra,
  Wrap,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import SocialMedia from '../SocialMedia';

const Introduction = () => {
  const flavorText = useColorModeValue('teal.500', 'teal.300');
  const textColor = useColorModeValue('black', 'gray');

  return (
    <Box>
      <Wrap justify='space-between' align='center'>
        <Box width={['100%', '54%']}>
          <SlideFade
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.8 } }}
          >
            <Text
              color={flavorText}
              mb={-3}
              fontSize='display2'
              fontWeight='semibold'
            >
              Hello, I'm...
            </Text>
            <Heading fontSize='display'>
              Ryan Le.
            </Heading>
          </SlideFade>

          <SlideFade
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.9 } }}
          >
            <Text fontSize='display3'>
              I'm currently a <chakra.span color={flavorText} fontWeight={600}>Web Engineer III</chakra.span> at American Express, working on all things front-end.
            </Text>

            <Stack mt={10}>
              <Text color={textColor}>
                🚀 &nbsp; Exploring opportunities, side projects, freelancing and more.
              </Text>
              <Text color={textColor}>
                🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.
              </Text>
              <Text color={textColor}>
                🏙️  &nbsp; Currently based out of New York City.
              </Text>

              <SocialMedia title='Connect with me on Social Media!' />
            </Stack>
          </SlideFade>
        </Box>

        <Box
          width={['100%', '40%']}
          align={['center', 'right']}
          pr={[0, 0, 0, 10]}
        >
          <SlideFade
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.4, delay: 1 } }}
            align='center'
          >
            <Image
              src='https://i.imgur.com/TAchISX.jpg'
              width='full'
              height='auto'
              borderRadius={25}
              boxShadow='md'
              mt={10}
            />
            <Text mt={5} color='gray' align='center'>
              Here's me in Sandpoint, Idaho. <br />
              I like to travel.
            </Text>
          </SlideFade>
        </Box>
      </Wrap>
    </Box>
  );
};

export default Introduction;
