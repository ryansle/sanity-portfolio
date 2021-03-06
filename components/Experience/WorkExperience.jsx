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
  useColorModeValue
} from '@chakra-ui/react';
import { MdSettings as Gear } from 'react-icons/md';
import SkillTag from '../SkillTag';

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

  // Styles
  const flavorText = useColorModeValue('teal.500', 'teal.300');

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
            color={flavorText}
          >
            {title}
          </Text>

          <Text
            fontSize='lg'
            color={flavorText}
          >
            {dates}
          </Text>

          <Text fontSize='lg' my={5}>
            {summary}
          </Text>

          <Heading
            fontWeight='semibold'
            fontSize='xl'
            mb={2}
            mt={8}
            color={flavorText}
          >
            {header}
          </Heading>
          <List spacing={2} fontSize='md'>
            {responsibilities.map((res) => (
              <ListItem key={res}>
                <ListIcon as={Gear} color={flavorText} />
                {res}
              </ListItem>
            ))}
          </List>

          {techStack && (
            <Box mt={5}>
              {techStack?.map((tech) => (
                <SkillTag
                  key={tech.technology}
                  name={tech.technology}
                  icon={tech.iconUrl}
                  radii={tech.radii}
                />
              ))}
            </Box>
          )}
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
