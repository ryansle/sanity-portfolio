// Components
import AppNavigation from '../components/Navigation/AppNavigation';
import GetInTouch from '../components/Contact/GetInTouch';
import ContactForm from '../components/Contact/ContactForm';
import Head from 'next/head';

const Contact = () => {
  return (
    <AppNavigation px={['0px', '0px', '0px', '15vw']}>
      <Head>
        <title>Ryan Le - Contact Me</title>
        <meta
          name='description'
          content='Get in touch so we can get to work together!'
        />
        <meta property='og:image' content='https://i.imgur.com/jyYmCzt.jpg' />
      </Head>
      <GetInTouch />
      <ContactForm />
    </AppNavigation>
  );
};

export default Contact;
