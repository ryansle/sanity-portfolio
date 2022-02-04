// Components
import AppNavigation from '../components/Navigation/AppNavigation';
import Introduction from '../components/Home/Introduction';

const Home = () => {
  return (
    <AppNavigation enableTransition>
      <Introduction />
    </AppNavigation>
  );
};

export default Home;
