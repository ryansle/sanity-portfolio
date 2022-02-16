// Components
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon as Hamburger } from '@chakra-ui/icons';
import { SunIcon as Sun, MoonIcon as Moon } from '@chakra-ui/icons';

// Utilities
import { useRouter } from 'next/router';

const NavMenu = ({ nav }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

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
          onClick={() => toggleColorMode()}
        >
          {colorMode === 'light' ? 'Change to Dark Mode' : 'Change to Light Mode'}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
