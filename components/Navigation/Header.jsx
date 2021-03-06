import { useRef } from 'react';

// Components
import {
  Box,
  Slide,
  Flex,
  Heading,
  Button,
  Image,
  IconButton,
  useColorMode,
  Center,
  useColorModeValue,
  useToast,
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
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = ({ enableTransition }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDesktopScreen = useMediaQuery(1200);

  const toast = useToast();
  const toastIdRef = useRef();

  // Styles
  const background = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.400', '');
  const buttonColor = useColorModeValue('teal.500', 'teal.300');

  const nav = [
    { icon: <Home />, text: 'Home', route: '/' },
    { icon: <Person />, text: 'About', route: '/about' },
    { icon: <Work />, text: 'Experience', route: '/experience' },
    { icon: <Code />, text: 'Skills', route: '/skills' },
    { icon: <Mac />, text: 'Projects', route: '/projects' },
    { icon: <Contact />, text: 'Contact', route: '/contact' },
  ];

  const showToast = () => {
    toastIdRef.current = toast({
      title: 'Color Mode Switched!',
      description: 'By the way, the experience is better on dark mode 😉',
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
  };

  const toggleMode = () => {
    if (colorMode === 'dark') {
      showToast();
    }

    toggleColorMode();
  };

  return (
    <Box
      pos='fixed'
      top={0}
      left={0}
      zIndex={10}
    >
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
              width={['50%', '15%']}
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

            {isDesktopScreen && (
              <Center
                display='flex'
                alignItems='center'
                width={['50%', '70%']}
              >
                {nav.map((button) => (
                  <Button
                    key={button.text}
                    leftIcon={button.icon}
                    mx='10px'
                    variant='ghost'
                    onClick={() => router.push(button.route)}
                    color={router.pathname === button.route ? buttonColor : ''}
                    borderBottomWidth={router.pathname === button.route ? '4px' : ''}
                    borderBottomColor={router.pathname === button.route ? buttonColor : ''}
                    borderBottomRadius={router.pathname === button.route ? 'none' : ''}
                    fontWeight={router.pathname === button.route ? 'bold' : '600'}
                  >
                    {button.text}
                  </Button>
                ))}
              </Center>
            )}

            <Box
              width={['50%', '15%']}
              align='right'
              alignItems='center'
            >
              {!isDesktopScreen ? (
                <NavMenu nav={nav} />
              ) : (
                <IconButton
                  variant='ghost'
                  fontSize='20px'
                  icon={colorMode === 'light' ? <Moon /> : <Sun />}
                  onClick={toggleMode}
                />
              )}
            </Box>
          </Flex>
        </Box>
      </Slide>
    </Box>
  );
};

export default Header;
