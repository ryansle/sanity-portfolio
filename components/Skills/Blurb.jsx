// Components
import { Box, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Legend from './Legend';

const Blurb = () => {
  return (
    <Box mb={10}>
      <Heading size='2xl' mb={10}>
        My Skillsets
      </Heading>

      <Flex justify='space-between' flexWrap='wrap' align='center'>
        <Box width={['100%', '53%']}>
          <Heading size='lg' mb={5}>
            Web Development
          </Heading>

          <Stack spacing={3}>
            <Text fontSize='lg'>
              Up to this point in my career, I've primarily worked as a front-end web developer, building out design systems and web components that power the look and feel of a variety of different applications. That being said, the front-end is definitely where I excel as a developer.
            </Text>
            <Text fontSize='lg'>
              I have limited experiences as a full-stack developer - but that doesn't mean I'm not willing to learn. In fact, in time, I'd love to be as confident building APIs as I am building front-ends.
            </Text>
            <Text fontSize='lg'>
              Here are some of my favorite languages, frameworks, and technologies to use at the moment:
            </Text>
          </Stack>
        </Box>

        <Box width={['100%', '42%']}>
          <Legend />
        </Box>
      </Flex>
    </Box>
  );
};

export default Blurb;
