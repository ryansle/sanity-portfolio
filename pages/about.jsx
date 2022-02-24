// Components
import { Divider } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Biography from '../components/About/Biography';
import Education from '../components/About/Education';
import Head from 'next/head';

const About = () => {
  return (
    <AppNavigation px={['0px', '0px', '0px', '3vw']}>
      <Head>
        <title>Ryan Le - About Me</title>
        <meta
          name='description'
          content='Learn more about my background and education.'
        />
        <meta property='og:image' content='https://i.imgur.com/jyYmCzt.jpg' />
      </Head>

      <Biography />
      <Divider my={['50px', '100px']} />
      <Education />
    </AppNavigation >
  );
};

export default About;
