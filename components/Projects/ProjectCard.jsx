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
import SkillTag from '../SkillTag';

// Utilities
import { useRouter } from 'next/router';

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

  const router = useRouter();

  return (
    <Box
      borderWidth='1px'
      borderRadius={10}
      height={['full', 'full']}
      width='full'
      maxHeight='1000px'
      bg={bgColor}
    >
      <Image
        src={imageUrl}
        borderTopRadius={10}
        height='auto'
        width='auto'
        objectFit='cover'
      />
      <Box p={5} borderTopWidth='1px'>
        <Flex justify='space-between' align='center'>
          <Box>
            <Heading fontSize='display3'>
              {title}
            </Heading>
            {subtitle && (
              <Heading fontSize='sm' mt={1}>
                {subtitle}
              </Heading>
            )}
          </Box>

          <HStack>
            {github && (
              <IconButton
                icon={<GitHub />}
                variant='ghost'
                onClick={() => router.push(github)}
              />
            )}

            {link && (
              <IconButton
                icon={<ExternalLink />}
                variant='ghost'
                onClick={() => router.push(link)}
              />
            )}
          </HStack>
        </Flex>

        <Box mt={2}>
          {techStack.map((tech) => (
            <SkillTag
              key={tech.technology}
              name={tech.technology}
              icon={tech.iconUrl}
              radii={tech.radii}
            />
          ))}
        </Box>

        <Divider my={3} />

        <Text>
          {summary}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
