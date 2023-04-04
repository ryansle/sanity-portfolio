// Components
import {
  Box,
  Heading,
  Text,
  chakra,
  Flex,
  Image,
  Stack,
  SlideFade,
  Tooltip,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import SocialMedia from '../SocialMedia';

const Biography = () => {
  const flavorText = useColorModeValue('teal.500', 'teal.300');

  const betaToolTip = (
    <Tooltip label='I was literally 11 years old being paid to play a video game. Living the dream!'>
      <chakra.span color={flavorText} fontWeight='semibold'>Beta Tester</chakra.span>
    </Tooltip>
  );

  const terrariaToolTip = (
    <Link href='https://terraria.org/'>
      <chakra.span color={flavorText} fontWeight='semibold'>Terraria.</chakra.span>
    </Link>
  );

  return (
    <Box>
      <Heading size='2xl' mb={5}>
        About Me
      </Heading>
      <Flex justify='space-between' align='center' flexWrap='wrap'>
        <Box width={['100%', '45%']}>
          <SlideFade
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.3, delay: 0.3 } }}
          >
            <Stack spacing={5}>
              <Text fontSize='lg'>
                Hey there! My name is Ryan Le and I am a 2021 graduate of the University of Nebraska-Lincoln with a Bachelor of Science degree in Software Engineering - minor in Mathematics.
              </Text>
              <Text fontSize='lg'>
                I am a Vietnamese-American front-end developer originally from Sioux Falls, South Dakota. Currently, I am based out of the New York City area. I primarily work with web-based technologies such as React.js, TypeScript, JavaScript, Node.js, and Tailwind CSS, among other things.
              </Text>
              <Text fontSize='lg'>
                I got my start in the world of software engineering at the young age of 11 when I was invited to join Re-Logic as a {betaToolTip} for the hit indie game, {terrariaToolTip}
              </Text>
              <Text fontSize='lg'>
                Aside from my work as a software engineer, I spend my free time biking around the city, catching up on video game releases from over the years, and traveling the US. It's my personal goal to visit each one of the fifty states, and I'm about halfway there so far.
              </Text>
            </Stack>
          </SlideFade>
        </Box>

        <Box width={['100%', '45%']} align='center'>
          <SlideFade
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.4, delay: 0.5 } }}
            align='center'
          >
            <Image
              src='https://i.imgur.com/RufrMhW.png'
              width={['100%', 420]}
              height='auto'
              borderRadius={10}
              boxShadow='md'
              mt={10}
            />
            <Text mt={5} mb={-5} color='gray'>
              February 2023
            </Text>
          </SlideFade>
        </Box>
      </Flex>

      <SocialMedia title='My Social Media' />
    </Box>
  );
};

export default Biography;