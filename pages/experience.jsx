// Components
import AppNavigation from '../components/Navigation/AppNavigation';
import Experiences from '../components/Experience/Experiences';
import Head from 'next/head';

const Experience = () => {
  return (
    <AppNavigation>
      <Head>
        <title>Ryan Le - Work Experience</title>
        <meta
          name='description'
          content='Learn more about my software engineering career and how I can leverage these skills in a new role.'
        />
        <meta property='og:image' content='https://i.imgur.com/jyYmCzt.jpg' />
      </Head>
      <Experiences />
    </AppNavigation>
  );
};

export default Experience;
