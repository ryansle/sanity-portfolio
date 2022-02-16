// Components
import {
  Box,
  Image,
  Heading,
  Text,
  IconButton,
  Divider,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiFillGithub as GitHub } from 'react-icons/ai';
import { ExternalLinkIcon as ExternalLink } from '@chakra-ui/icons';

// TODO: Skill tags
const ProjectCard = ({ project }) => {
  const {
    title,
    subtitle,
    summary,
    imageUrl,
    techStack,
    github,
    link,
  } = project;
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Box
      borderWidth='1px'
      borderRadius={10}
      height={['full', '200px']}
      width='full'
      bg={bgColor}
    >
      <Image src={imageUrl} />
      <Box p={5}>
        <Flex justify='space-between' align='center'>
          <Heading>
            {title}
          </Heading>
          {subtitle && (
            <Heading>
              {subtitle}
            </Heading>
          )}

          <HStack>
            {github && (
              <IconButton
                icon={<GitHub />}
                variant='ghost'
              />
            )}

            {link && (
              <IconButton
                icon={<ExternalLink />}
                variant='ghost'
              />
            )}
          </HStack>
        </Flex>

        <Divider my={3} />

        <Text>
          {summary}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
