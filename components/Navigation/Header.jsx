// Components
import {
  Box,
  Slide,
  Flex,
  Heading,
  Button,
  Image,
  IconButton,
  useMediaQuery,
  useColorMode,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import NavMenu from './NavMenu';
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdCode as Code,
  MdLaptopMac as Mac,
} from 'react-icons/md';
import { SunIcon as Sun, MoonIcon as Moon } from '@chakra-ui/icons';

// Utilities
import { useRouter } from 'next/router';

// TODO: Selection indicator
// TODO: Revise component structure, fix trailing space on IconButton
// TODO: fix z-indexing of buttons with icons
// TODO: Fix z-indexing of dividers
const Header = ({ enableTransition }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobileScreen] = useMediaQuery('(max-width: 1200px)');

  // Styles
  const background = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.400', '');

  const nav = [
    { icon: <Home />, text: 'Home', route: '/' },
    { icon: <Person />, text: 'About', route: '/about' },
    { icon: <Work />, text: 'Experience', route: '/experience' },
    { icon: <Code />, text: 'Skills', route: '/skills' },
    { icon: <Mac />, text: 'Projects', route: '/projects' },
    { icon: <Contact />, text: 'Contact', route: '/contact' },
  ];

  return (
    <Slide
      direction='top'
      in={true}
      transition={
        enableTransition
          ? { enter: { duration: 0.75, delay: 0.01 } }
          : { enter: { duration: 0, delay: 0 } }
      }
    >
      <Box
        zIndex={4}
        bg={background}
        width='full'
        borderBottomWidth='1px'
        borderBottomColor={borderColor}
        px={['20px', '120px']}
        py={['12px', '20px']}
      >
        <Flex
          justify='space-between'
          align='center'
        >
          <Box
            display='flex'
            alignItems='center'
            width={['full', '15%']}
            onClick={() => router.push('/')}
            cursor='pointer'
          >
            <Image
              src='https://i.imgur.com/G2OKPI4.png'
              width='50px'
              mr={5}
              borderRadius='full'
            />
            <Heading size='md'>
              RYAN S. LE
            </Heading>
          </Box>

          {isMobileScreen ? (
            <Box align='right'>
              <NavMenu nav={nav} />
            </Box>
          ) : (
            <>
              <Center
                display='flex'
                width='70%'
                alignItems='center'
              >
                {nav.map((button) => (
                  <Button
                    key={button.text}
                    leftIcon={button.icon}
                    mx='10px'
                    variant='ghost'
                    onClick={() => router.push(button.route)}
                  >
                    {button.text}
                  </Button>
                ))}
              </Center>

              <Box align='right' width='15%'>
                <IconButton
                  variant='ghost'
                  fontSize='20px'
                  icon={colorMode === 'light' ? <Moon /> : <Sun />}
                  onClick={toggleColorMode}

                />
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </Slide>
  );
};

export default Header;
