// Components
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
} from '@chakra-ui/react';
import { MdSettings as Gear } from 'react-icons/md';

// TODO: Tech Stack tags
const WorkExperience = ({ data }) => {
  const {
    company,
    title,
    dates,
    summary,
    header,
    responsibilities,
    techStack,
    imageUrl,
  } = data;

  return (
    <Box>
      <Flex justify='space-between' align='center' flexWrap='wrap-reverse'>
        <Box width={['100%', '60%']} my={4}>
          <Heading size='xl'>
            {company}
          </Heading>

          <Text
            fontSize='lg'
            fontWeight='semibold'
            color='teal.300'
          >
            {title}
          </Text>

          <Text
            fontSize='lg'
            color='teal.300'
          >
            {dates}
          </Text>

          <Text fontSize='lg' my={5}>
            {summary}
          </Text>

          <Heading
            fontWeight='semibold'
            fontSize='xl'
            mb={5}
          >
            {header}
          </Heading>
          <List spacing={2} fontSize='lg'>
            {responsibilities.map((res) => (
              <ListItem key={res}>
                <ListIcon as={Gear} color='teal.300' />
                {res}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box width={['100%', '35%']}>
          <Image
            src={imageUrl}
            width={800}
            my={[10, 0]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WorkExperience;
