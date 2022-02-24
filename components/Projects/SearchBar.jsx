// Components
import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button
} from '@chakra-ui/react';
import {
  TriangleDownIcon as Triangle,
  SearchIcon as Search,
} from '@chakra-ui/icons';
import { IoIosCloseCircle as Close } from 'react-icons/io';

const SearchBar = ({ setSearchTerm }) => {
  const updateSearchTerm = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  }

  return (
    <HStack mb={10}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<Search color='gray.600' />}
        />
        <Input
          placeholder='Search projects...'
          variant='dark'
          onChange={updateSearchTerm}
        />
        <InputRightElement
          children={<Close color='gray.600' />}
          onClick={() => setSearchTerm('')}
        />
      </InputGroup>

      {/* <Button
        px={5}
        leftIcon={<Triangle />}
      >
        Filter Projects
      </Button> */}
    </HStack>
  );
};

export default SearchBar;
