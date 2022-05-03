// Components
import {
  Box,
  Heading,
  Text,
  Divider,
  SimpleGrid,
  ScaleFade,
  Skeleton
} from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const SkeletonLoader = () => (
  <Skeleton
    height='260px'
    width='full'
    borderRadius={10}
    mb={3}
  />
);

const ProjectSection = ({ title, description, projects, isLoading }) => {
  return (
    <Box>
      <Heading size='lg' mb={5}>
        {title}
      </Heading>
      <Text fontSize='lg' mb={4}>
        {description}
      </Text>

      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {isLoading && (
          Array(4).fill('').map((_, index) => (
            <SkeletonLoader />
          ))
        )}

        {projects?.map((project, index) => (
          <ScaleFade
            initialScale={0.9}
            in={true}
            transition={{ enter: { duration: 1.5, delay: (index / 1.7) - 0.20 } }}
          >
            <ProjectCard
              key={project.title}
              project={project}
            />
          </ScaleFade>
        ))}
      </SimpleGrid>

      {projects.length !== 0 && <Divider my={10} />}
    </Box>
  );
};

export default ProjectSection;
