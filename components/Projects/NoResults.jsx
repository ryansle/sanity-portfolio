// Components
import { ScaleFade, Box, Icon, Heading, Text } from '@chakra-ui/react';
import { MdSearchOff as None } from 'react-icons/md';

const NoResults = () => {
  return (
    <ScaleFade
      initialScale={0.9}
      in={true}
      transition={{ enter: { duration: 0.3, delay: 0.2 } }}
    >
      <Box align='center' mt={10}>
        <Icon
          as={None}
          width='100px'
          height='100px'
        />
        <Heading size='lg' mb={5}>
          No Matching Projects
        </Heading>
        <Text fontSize='lg'>
          Looks like there weren't any matches - yet.
        </Text>
        <Text fontSize='lg'>
          Refine your search and try again.
        </Text>
      </Box>
    </ScaleFade >
  );
};

export default NoResults;
