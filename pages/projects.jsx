import { useState, useEffect } from 'react';

// Components
import { Heading, Text, Divider } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import ProjectSection from '../components/Projects/ProjectSection';

// Utilities
import { useQuery } from 'react-query';
import { fetchProjects } from '../data/fetch';

const Projects = () => {
  const { data: projects } = useQuery('projects', fetchProjects);

  const [school, setSchool] = useState([]);
  const [work, setWork] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [freelance, setFreelance] = useState([]);

  useEffect(() => {
    if (projects) {
      setSchool(projects.filter((project) => project.category === 'school'));
      setWork(projects.filter((project) => project.category === 'work'));
      setPersonal(projects.filter((project) => project.category === 'personal'));
      setFreelance(projects.filter((project) => project.category === 'freelance'));
    }
  }, [projects]);

  return (
    <AppNavigation>
      <Heading size='2xl' mb={5}>
        Projects
      </Heading>

      <ProjectSection
        title='Personal Projects'
        description="Things I've built on my own time, just for me."
        projects={personal}
      />

      <ProjectSection
        title='Work Projects'
        description="Projects I've worked on in industry that I'm allowed to talk about."
        projects={work}
      />

      <ProjectSection
        title='Freelance Projects'
        description='Things I worked on as freelance opportunities.'
        projects={freelance}
      />

      <ProjectSection
        title='School Projects'
        description="Projects I've worked on throughout my college career for a grade."
        projects={school}
      />

    </AppNavigation>
  );
};

export default Projects;
