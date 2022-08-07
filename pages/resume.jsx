// Components
import { Box, Heading, Stack, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { DownloadIcon as Download } from '@chakra-ui/icons';
import AppNavigation from '../components/Navigation/AppNavigation';
import Head from 'next/head';

const Resume = () => {
  const themeColor = useColorModeValue('teal.500', 'teal.300');

  return (
    <AppNavigation px={['0px', '0px', '0px', '15vw']}>
      <Box>
        <Head>
          <title>Ryan Le - Resume</title>
          <meta name='description' content='View my up-to-date resume here!' />
          <meta
            name='keywords'
            content='Front-End, React.js, Freelance, Web Engineer, Ryan Le, Front-End Developer, Web Engineer, Chakra UI, Ryan Le New York, Ryan Le Sioux Falls, Ryan Le Software Engineer, Ryan Le Web Engineer, Freelance Developer, Freelance Engineer, Ryan Le Web Develpment, Web Developer, Web Engineer Resume, Web Developer Resume, React Developer, Design Systems Engineer, User Experiences, React Developer, React Developer Resume'
          />
        </Head>

        <Heading size='2xl' mb={10}>My Resume</Heading>
        <Stack spacing={5}>
          <Text fontSize='lg'>
            Sometimes less is more. So, here's a condensed version of my portfolio site, ready to be parsed by your company's applicant tracking system.
          </Text>
          {/* <a href='/resume.pdf' download>
            <Button
              bg={themeColor}
              colorScheme='teal'
              leftIcon={<Download />}
              width='full'
            >
              Download Resume
            </Button>
          </a> */}
        </Stack>
      </Box>
    </AppNavigation>
  );
};

export default Resume;
