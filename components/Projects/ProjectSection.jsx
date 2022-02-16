// Components
import { Box, Wrap, Heading, Text, Divider } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

// TODO: dynamic projectcard size
const ProjectSection = ({ title, description, projects }) => {
  return (
    <Box>
      <Heading size='lg' mb={5}>
        {title}
      </Heading>
      <Text fontSize='lg' mb={4}>
        {description}
      </Text>

      <Wrap
        align='flex-start'
        wrap='wrap'
        spacing={3}
        justify='space-between'
      >
        {projects?.map((project) => (
          <Box width={['100%', '49%']}>
            <ProjectCard
              key={project.title}
              project={project}
            />
          </Box>
        ))}
      </Wrap>

      <Divider my={10} />
    </Box>
  );
};

export default ProjectSection;
