import { useRef } from 'react';

// Components
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { HamburgerIcon as Hamburger } from '@chakra-ui/icons';
import { SunIcon as Sun, MoonIcon as Moon } from '@chakra-ui/icons';

// Utilities
import { useRouter } from 'next/router';

const NavMenu = ({ nav }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();
  const toastIdRef = useRef();

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
    <Menu zIndex={10}>
      <MenuButton
        as={IconButton}
        aria-label='Navigation'
        icon={<Hamburger />}
        variant='outline'
      />
      <MenuList>
        {nav.map((item) => (
          <MenuItem
            key={item.text}
            icon={item.icon}
            onClick={() => router.push(item.route)}
            zIndex={10}
          >
            {item.text}
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem
          icon={colorMode === 'light' ? <Moon /> : <Sun />}
          onClick={toggleMode}
        >
          {colorMode === 'light' ? 'Change to Dark Mode' : 'Change to Light Mode'}
        </MenuItem>
      </MenuList>
    </Menu >
  );
};

export default NavMenu;
