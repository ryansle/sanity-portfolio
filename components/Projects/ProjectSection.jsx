// Components
import { Box, Heading, Text, Divider, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ title, description, projects }) => {
  return (
    <Box>
      <Heading size='lg' mb={5}>
        {title}
      </Heading>
      <Text fontSize='lg' mb={4}>
        {description}
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {projects?.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </SimpleGrid>

      <Divider my={10} />
    </Box>
  );
};

export default ProjectSection;
