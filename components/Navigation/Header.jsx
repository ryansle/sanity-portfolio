// Components
import { Box, Slide, Flex, Heading, Button } from '@chakra-ui/react';
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdLaptopMac as Mac,
} from 'react-icons/md';

// Utilities
import { useRouter } from 'next/router';

const Header = ({ enableTransition }) => {
  const router = useRouter();

  const nav = [
    { icon: <Home />, text: 'Home', route: '/' },
    { icon: <Person />, text: 'About', route: '/about' },
    { icon: <Work />, text: 'Experience', route: '/experience' },
    { icon: <Mac />, text: 'Projects', route: '/projects' },
    { icon: <Contact />, text: 'Contact', route: '/contact' },
  ];

  return (
    <Slide
      direction='top'
      reverse
      in={true}
      transition={
        enableTransition
          ? { enter: { duration: 0.75, delay: 0.01 } }
          : { enter: { duration: 0, delay: 0 } }
      }
    >
      <Box
        zIndex={10}
        width='full'
        bg='gray.700'
        borderBottomWidth='1px'
        px={['20px', '120px']}
        py='25px'
      >
        <Flex
          justify='space-between'
          align='center'
        >
          <Box>
            <Heading size='md'>
              RYAN S. LE
            </Heading>
          </Box>
          <Box display='flex'>
            {nav.map((button) => (
              <Button
                leftIcon={button.icon}
                mx={1}
                variant='ghost'
                onClick={() => router.push(button.route)}
              >
                {button.text}
              </Button>
            ))}
          </Box>
        </Flex>
      </Box>
    </Slide>
  );
};

export default Header;
