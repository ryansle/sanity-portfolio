// Components
import { Divider } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Introduction from '../components/Home/Introduction';

const Home = () => {
  return (
    <AppNavigation enableTransition>
      <Introduction />
      <Divider my={['50px', '100px']} />
    </AppNavigation>
  );
};

export default Home;
