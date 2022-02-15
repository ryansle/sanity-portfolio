import { useState, useEffect } from 'react';

// Components
import AppNavigation from '../components/Navigation/AppNavigation';
import Blurb from '../components/Skills/Blurb';

// Utilities
import { fetchSkills } from '../data/fetch';
import { useQuery } from 'react-query';
import SkillTable from '../components/Skills/SkillTable';

const Skills = () => {
  const { data: skills, isLoading } = useQuery('skills', fetchSkills);

  const [web, setWeb] = useState([]);
  const [other, setOther] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    if (skills) {
      setWeb(skills.filter((skill) => skill.category === 'webdev'));
      setOther(skills.filter((skill) => skill.category === 'other'));
      setRandom(skills.filter((skill) => skill.category === 'random'));
    }
  }, [skills]);

  return (
    <AppNavigation>
      <Blurb />
      <SkillTable
        skills={web}
        caption='Technologies I use regularly in my career as a web developer.'
      />
    </AppNavigation>
  );
};

export default Skills;
