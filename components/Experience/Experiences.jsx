import { useState, useEffect } from 'react';

// Components
import { Box, Heading, Stack, Divider, SlideFade } from '@chakra-ui/react';
import WorkExperience from './WorkExperience';

// Utilities
import { useQuery } from 'react-query';
import { fetchExperience } from '../../data/fetch';

// TODO: Loader
const Experiences = () => {
  const { data, isLoading } = useQuery('experience', fetchExperience);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    if (data) {
      const sorted = data?.sort((a, b) => (a.loadOrder > b.loadOrder) ? 1 : -1);
      setExperience(sorted);
    }
  }, [data]);

  return (
    <Box>
      <Heading size='2xl'>
        Work Experience
      </Heading>

      <Stack spacing={5}>
        {experience?.map((job, index) => (
          <SlideFade
            key={job.company}
            direction='top'
            in={true}
            transition={{ enter: { duration: 0.3, delay: 0.3 } }}
          >
            <WorkExperience data={job} />
            {index !== experience?.length - 1 && <Divider my='10px' />}
          </SlideFade>
        ))}
      </Stack>
    </Box >
  );
};

export default Experiences;
