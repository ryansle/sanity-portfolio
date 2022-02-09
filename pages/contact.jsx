// Components
import AppNavigation from '../components/Navigation/AppNavigation';
import GetInTouch from '../components/Contact/GetInTouch';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <AppNavigation px={['0px', '0px', '0px', '15vw']}>
      <GetInTouch />
      <ContactForm />
    </AppNavigation>
  );
};

export default Contact;
