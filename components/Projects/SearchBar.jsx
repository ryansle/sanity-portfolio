// Components
import {
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon as Search } from '@chakra-ui/icons';
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
          placeholder='Search all projects...'
          variant='dark'
          onChange={updateSearchTerm}
        />
        <InputRightElement
          children={<Close color='gray.600' />}
          onClick={() => setSearchTerm('')}
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchBar;
