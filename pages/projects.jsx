import { useState, useEffect } from 'react';

// Components
import { Heading } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import ProjectSection from '../components/Projects/ProjectSection';
import SearchBar from '../components/Projects/SearchBar';
import Head from 'next/head';

// Utilities
import { useQuery } from 'react-query';
import { fetchProjects } from '../data/fetch';
import NoResults from '../components/Projects/NoResults';

const Projects = () => {
  const { data: projects, isLoading } = useQuery('projects', fetchProjects);

  // Projects
  const [school, setSchool] = useState([]);
  const [work, setWork] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [freelance, setFreelance] = useState([]);

  // Search
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (projects) {
      setSchool(projects.filter((project) => project.category === 'school').sort((a, b) => a.loadOrder > b.loadOrder ? 1 : -1));
      setWork(projects.filter((project) => project.category === 'work').sort((a, b) => a.loadOrder > b.loadOrder ? 1 : -1));
      setPersonal(projects.filter((project) => project.category === 'personal').sort((a, b) => a.loadOrder > b.loadOrder ? 1 : -1));
      setFreelance(projects.filter((project) => project.category === 'freelance').sort((a, b) => a.loadOrder > b.loadOrder ? 1 : -1));
    }
  }, [projects]);

  useEffect(() => {
    if (searchTerm !== '') {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      const filtered = projects?.filter((project) => project.title.toLowerCase().includes(normalizedSearchTerm));
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects([]);
    }
  }, [searchTerm]);

  return (
    <AppNavigation>
      <Head>
        <title>Ryan Le - Projects</title>
        <meta
          name='description'
          content='Read about my previous works and personal projects.'
        />
        <meta property='og:image' content='https://i.imgur.com/jyYmCzt.jpg' />
      </Head>

      <Heading size='2xl' mb={5}>
        Projects
      </Heading>

      <SearchBar
        setSearchTerm={setSearchTerm}
      />

      {searchTerm === '' && (
        <>
          <ProjectSection
            title='Personal Projects'
            description="Things I've built on my own time, just for fun."
            projects={personal}
            isLoading={isLoading}
          />

          <ProjectSection
            title='Work Projects'
            description="Projects I've worked on in industry that I'm allowed to talk about."
            projects={work}
            isLoading={isLoading}
          />

          <ProjectSection
            title='Freelance Projects'
            description='Things I worked on as freelance opportunities.'
            projects={freelance}
            isLoading={isLoading}
          />

          <ProjectSection
            title='School Projects'
            description="Projects I've worked on throughout my college career for a grade."
            projects={school}
            isLoading={isLoading}
          />
        </>
      )}

      {searchTerm !== '' && (
        <>
          <ProjectSection
            title={filteredProjects.length === 0 ? '' : 'Project Results'}
            description={filteredProjects.length === 0 ? '' : 'Projects that match your search query.'}
            projects={filteredProjects}
            isLoading={isLoading}
          />

          {filteredProjects.length === 0 && (
            <NoResults />
          )}
        </>
      )}
    </AppNavigation>
  );
};

export default Projects;
