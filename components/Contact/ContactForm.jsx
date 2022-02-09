import { useState } from 'react';

// Components
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Button,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineClear as Clear } from 'react-icons/ai';
import { BiMailSend as Send } from 'react-icons/bi';

// Utilities
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/validate';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  validEmail: true,
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const updateForm = (e) => {
    const { name, value } = e.target;

    setForm((details) => ({
      ...details,
      [name]: value,
    }));
  };

  const clearForm = () => setForm(initialForm);

  const validateEmailOnBlur = (e) => {
    const targetEmail = e.target.value;

    if (targetEmail === '' || validateEmail(targetEmail)) {
      setForm((details) => ({
        ...details,
        validEmail: true,
      }));
    } else {
      setForm((details) => ({
        ...details,
        validEmail: false,
      }));
    }
  };

  const sendEmail = () => {
    setLoading(true);
    setTimeout(() => {

      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;
      emailjs.send('gmail', templateId, form, userId);
      setLoading(false);
      toast({
        title: 'Email Sent!',
        description: 'Expect an email back from me at ryanle@live.com soon!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      clearForm();
    }, 1300);
  };

  return (
    <Box mt={10}>
      <FormControl isRequired>
        <FormLabel mt={5}>Name</FormLabel>
        <Input
          name='name'
          placeholder='Whom am I speaking to?'
          onChange={updateForm}
          value={form.name}
          variant='dark'
        />

        <FormLabel mt={5}>Email Address</FormLabel>
        <Input
          name='email'
          placeholder='Where should I follow up to?'
          onChange={updateForm}
          onBlur={validateEmailOnBlur}
          errorBorderColor='crimson'
          isInvalid={!form.validEmail}
          value={form.email}
          variant='dark'
        />
        {!form.validEmail && (
          <FormHelperText>
            Error: Invalid email address.
          </FormHelperText>
        )}


        <FormLabel mt={5}>Subject</FormLabel>
        <Input
          name='subject'
          placeholder="What's the deal?"
          onChange={updateForm}
          value={form.subject}
          variant='dark'
        />

        <FormLabel mt={5}>Message</FormLabel>
        <Textarea
          name='message'
          size='lg'
          placeholder='Talk about it!'
          onChange={updateForm}
          value={form.message}
          bg='white'
          _placeholder={{
            color: 'gray',
          }}
          color='black'
        />
      </FormControl>

      <HStack justify='space-between' mt={5}>
        <Button
          colorScheme='#teal'
          bg='teal.300'
          leftIcon={<Clear />}
          onClick={clearForm}
        >
          Clear Form
        </Button>
        <Button
          colorScheme='teal'
          bg='teal.300'
          rightIcon={<Send />}
          loadingText='Sending...'
          isDisabled={
            form.name === ''
            || form.email === ''
            || form.subject === ''
            || form.message === ''
            || !form.validEmail
          }
          onClick={sendEmail}
          isLoading={loading}
        >
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default ContactForm;
