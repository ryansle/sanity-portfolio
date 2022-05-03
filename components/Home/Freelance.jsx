// Components
import { Box, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react';

const Freelance = () => {
  const flavorText = useColorModeValue('teal.500', 'teal.300');
  const textColor = useColorModeValue('black', 'gray');

  return (
    <Box align='center' px={[null, '150px']}>
      <Heading fontSize='4xl' mb={5}>
        Looking to hire a freelance engineer?
      </Heading>

      <Text color={textColor} fontSize='lg' mb={5}>
        I have worked on projects of all shapes and sizes in my time in industry and as a freelance web devleoper.
        As part of my work with American Express, I've helped to build out brand new web projects from the ground up, maintained our existing suite of applications, and helped to modernize the technology stack as we continue to iterate. In my own time, I've built out a plethora of personal projects that you can view on my <Link href='/projects' fontWeight={600} color={flavorText}>projects page</Link>, and I'm always on the look out for exciting new opportunities!
      </Text>

      <Text color={textColor} fontSize='lg'>
        By the way, I do free consultations. 😉
      </Text>
    </Box>
  );
};

export default Freelance;
