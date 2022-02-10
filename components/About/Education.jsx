// Components
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';
import { MdCheckCircle as Check } from 'react-icons/md';
import { FaGraduationCap as Grad } from 'react-icons/fa';

// Utilities
import { fetchAccomplishments } from '../../data/fetch';
import { useQuery } from 'react-query';
import SlideUpWhenVisible from '../../hooks/SlideUpWhenVisible';

// TODO: Use loading state
const Education = () => {
  const { data: accomplishments, isLoading } = useQuery('accomplishments', fetchAccomplishments);

  // Styles
  const flavorText = useColorModeValue('teal.500', 'teal.300');

  return (
    <SlideUpWhenVisible>
      <Flex
        justify='space-between'
        align='center'
        flexWrap='wrap'
      >
        <Box width={['100%', '40%']} align='center'>
          <Image
            src='https://i.imgur.com/tTJbtDa.png'
            width={[200, 300]}
            height='auto'
            mb={[10, 0]}
          />
        </Box>

        <Box width={['100%', '58%']}>
          <Heading size='2xl' mb={5}>
            Education
          </Heading>
          <Heading size='lg' mb={2}>
            University of Nebraska-Lincoln
          </Heading>
          <Text fontSize='lg'>
            Bachelor of Science Degree in <chakra.span color={flavorText} fontWeight='semibold'>Software Engineering</chakra.span>; Minor in <chakra.span color={flavorText} fontWeight='semibold'>Mathematics</chakra.span>.
          </Text>
          <Text fontSize='lg'>
            <chakra.span color={flavorText} fontWeight='semibold'>Cumulative GPA</chakra.span>: 3.64 / 4.00
          </Text>
          <Text fontSize='lg'>
            <chakra.span color={flavorText} fontWeight='semibold'>Graduation Date</chakra.span>: May 8th, 2021 <Icon as={Grad} />
          </Text>

          <Heading size='md' mt={5} mb={3}>
            Accomplishments
          </Heading>
          <List spacing={2}>
            {accomplishments?.map((bullet) => (
              <ListItem key={bullet.accomplishment} fontSize='sm'>
                <ListIcon as={Check} color={flavorText} />
                {bullet.accomplishment}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </SlideUpWhenVisible>
  );
};

export default Education;
