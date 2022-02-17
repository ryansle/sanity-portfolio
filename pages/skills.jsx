import { useState, useEffect } from 'react';

// Components
import { Heading, Text, SlideFade } from '@chakra-ui/react';
import AppNavigation from '../components/Navigation/AppNavigation';
import Blurb from '../components/Skills/Blurb';

// Utilities
import { fetchSkills } from '../data/fetch';
import { useQuery } from 'react-query';
import SkillTable from '../components/Skills/SkillTable';

const Skills = () => {
  const { data: skills } = useQuery('skills', fetchSkills);

  const [web, setWeb] = useState([]);
  const [other, setOther] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    if (skills) {
      setWeb(skills.filter((skill) => skill.category === 'webdev' && skill.visible));
      setOther(skills.filter((skill) => skill.category === 'other' && skill.visible));
      setRandom(skills.filter((skill) => skill.category === 'random' && skill.visible));
    }
  }, [skills]);

  return (
    <AppNavigation>
      <Blurb />
      <SlideFade
        direction='top'
        in={true}
        transition={{ enter: { duration: 0.3, delay: 0.3 } }}
      >
        <SkillTable
          skills={web}
          caption='Technologies I use regularly in my career as a web developer.'
        />
      </SlideFade>

      <SlideFade
        direction='top'
        in={true}
        transition={{ enter: { duration: 0.3, delay: 0.4 } }}
      >
        <Heading size='lg' mb={5}>
          Other Programming Languages
        </Heading>
        <Text fontSize='lg' mb={10}>
          Of course, I haven't exclusively worked in web development over the years. I've gathered experience in other languages and technologies, as well, including:
        </Text>

        <SkillTable
          skills={other}
          caption="Languages I don't use super regularly, but am confident in picking back up when needed."
        />
      </SlideFade>

      <SlideFade
        direction='top'
        in={true}
        transition={{ enter: { duration: 0.3, delay: 0.5 } }}
      >
        <Heading size='lg' mb={5}>
          Other Random Skills
        </Heading>
        <Text fontSize='lg' mb={10}>
          Some of the other random things I've picked up over the years include:
        </Text>

        <SkillTable
          skills={random}
          caption="Mostly just things I've experimented with in the past."
        />
      </SlideFade>
    </AppNavigation>
  );
};

export default Skills;
