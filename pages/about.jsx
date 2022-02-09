// Components
import { Divider } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Biography from '../components/About/Biography';
import Education from '../components/About/Education';

const About = () => {
  // TODO: Larger margins between content and footer
  return (
    <AppNavigation px={['0px', '0px', '0px', '5vw']}>
      <Biography />
      <Divider my={['50px', '100px']} />
      <Education />
    </AppNavigation >
  );
};

export default About;
