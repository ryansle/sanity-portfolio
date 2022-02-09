// Components
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

const GetInTouch = () => {
  return (
    <Box>
      <Heading size='2xl' mb={10}>
        Let's Talk
      </Heading>

      <Stack spacing={5}>
        <Text fontSize='lg'>
          Liking what you see on my website? Looking to hire a short-term developer, or envisioning my work and I fitting in at your company? Shoot me a message and let's have a little chat about it!
        </Text>
        <Text fontSize='lg'>
          I'm always available for interesting new work, whether you're in the build phase of your current project or just need a hand in getting started.
        </Text>
        <Text fontSize='lg'>
          Drop a message to me below and let's get this going! 👇🏽
        </Text>
      </Stack>
    </Box>
  );
};

export default GetInTouch;
