import { useState, useEffect } from 'react';

// Components
import { Box, Heading, Stack, Divider } from '@chakra-ui/react';
import WorkExperience from './WorkExperience';

// Utilities
import { useQuery } from 'react-query';
import { fetchExperience } from '../../data/fetch';
import SlideUpWhenVisible from '../../hooks/SlideUpWhenVisible';

const Experiences = ({ experiences }) => {
  const { data } = useQuery('experience', fetchExperience, { initialData: experiences });
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
          <SlideUpWhenVisible key={job.company}>
            <WorkExperience data={job} />
            {index !== experience?.length - 1 && <Divider my='10px' />}
          </SlideUpWhenVisible>
        ))}
      </Stack>
    </Box >
  );
};

export async function getServerSideProps() {
  const experiences = await fetchExperience();
  return {
    props: {
      experiences,
    }
  };
};

export default Experiences;
