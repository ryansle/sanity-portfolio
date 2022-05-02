// Components
import { Divider } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Introduction from '../components/Home/Introduction';
import Readiness from '../components/Home/Readiness';
import References from '../components/Home/References';
import Head from 'next/head';

const Home = () => {
  return (
    <AppNavigation enableTransition>
      <Head>
        <title>Ryan Le - Front-End Developer</title>
        <meta
          name='description'
          content='Looking to fill a role on your software development team? Look no further - learn why you consider hiring me, Ryan Le.'
        />
        <meta property='og:image' content='https://i.imgur.com/jyYmCzt.jpg' />
      </Head>

      <Introduction />
      <Divider my={['50px', '100px']} />
      <Readiness />
      <Divider my={['50px', '100px']} />
      <References />
    </AppNavigation>
  );
};

export default Home;
