// Components
import { Box, Heading, Text, Link as ChakraLink, Button, useColorModeValue } from '@chakra-ui/react';
// import { DownloadIcon as Download } from '@chakra-ui/icons';
// import Link from 'next/link';

const Freelance = () => {
  const flavorText = useColorModeValue('teal.500', 'teal.300');
  const textColor = useColorModeValue('black', 'gray');

  return (
    <Box align='center' px={[null, '200px']}>
      <Heading fontSize='4xl' mb={5}>
        Looking to hire a freelance engineer?
      </Heading>

      <Text color={textColor} fontSize='lg' mb={5}>
        I have worked on projects of all shapes and sizes in my time in industry and as a freelance web developer.
        I've helped to build out brand new web projects from the ground up as well as maintained existing suites of applications.
      </Text>

      <Text color={textColor} fontSize='lg' mb={5}>
        In my own time, I've built out a plethora of personal projects that you can view on my <ChakraLink href='/projects' fontWeight={600} color={flavorText}>projects page</ChakraLink>, and I'm always on the look out for exciting new opportunities!
      </Text>

      <Text color={textColor} fontSize='lg' mb={5}>
        By the way, I do free consultations. 😉
      </Text>

      {/* <Link href='/ryan-resume.pdf' download>
        <Button
          bg={flavorText}
          colorScheme='teal'
          leftIcon={<Download />}
        >
          Download Resume
        </Button>
      </Link> */}
    </Box>
  );
};

export default Freelance;
