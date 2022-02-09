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
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdLaptopMac as Mac,
} from 'react-icons/md';
import { SunIcon as Sun, MoonIcon as Moon } from '@chakra-ui/icons';

// Utilities
import { useRouter } from 'next/router';

const NavMenu = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const nav = [
    { icon: <Home />, text: 'Home', route: '/' },
    { icon: <Person />, text: 'About', route: '/about' },
    { icon: <Work />, text: 'Experience', route: '/experience' },
    { icon: <Mac />, text: 'Projects', route: '/projects' },
    { icon: <Contact />, text: 'Contact', route: '/contact' },
  ];

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Navigation'
        icon={<Hamburger />}
        variant='outline'
      />
      <MenuList>
        {nav.map((item) => (
          <MenuItem
            icon={item.icon}
            onClick={() => router.push(item.route)}
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
