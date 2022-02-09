// Components
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon as Hamburger } from '@chakra-ui/icons';
import { AiFillHome as Home } from 'react-icons/ai';
import { IoPerson as Person } from 'react-icons/io5';
import { AtSignIcon as Contact } from '@chakra-ui/icons';
import {
  MdWork as Work,
  MdLaptopMac as Mac,
} from 'react-icons/md';

// Utilities
import { useRouter } from 'next/router';

const NavMenu = () => {
  const router = useRouter();

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
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
