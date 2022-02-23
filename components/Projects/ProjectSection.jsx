// Components
import { Box, Heading, Text, Divider, SimpleGrid, ScaleFade } from '@chakra-ui/react';
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
        {projects?.map((project, index) => (
          <ScaleFade
            initialScale={0.9}
            in={true}
            transition={{ enter: { duration: 1, delay: (index / 1.7) - 0.25 } }}
          >
            <ProjectCard
              key={project.title}
              project={project}
            />
          </ScaleFade>
        ))}
      </SimpleGrid>

      <Divider my={10} />
    </Box>
  );
};

export default ProjectSection;
