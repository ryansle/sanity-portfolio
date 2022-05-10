// Components
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import Reference from './Reference';

// Utilities
import { fetchReferrals } from '../../data/fetch';
import { useQuery } from 'react-query';

const References = () => {
  const { data } = useQuery('referrals', fetchReferrals);

  return (
    <Box width='full'>
      <Heading fontSize='4xl' mb={5}>
        Professional References
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        <Stack spacing={4}>
          {data?.slice(0, 2).map((ref) => (
            <Reference
              key={ref.name}
              name={ref.name}
              title={ref.title}
              imgPath={ref.imageUrl}
              referral={ref.referral}
            />
          ))}
        </Stack>

        <Stack spacing={4}>
          {data?.slice(2, 3).map((ref) => (
            <Reference
              key={ref.name}
              name={ref.name}
              title={ref.title}
              imgPath={ref.imageUrl}
              referral={ref.referral}
            />
          ))}
        </Stack>

        <Stack spacing={4}>
          {data?.slice(3, 10).map((ref) => (
            <Reference
              key={ref.name}
              name={ref.name}
              title={ref.title}
              imgPath={ref.imageUrl}
              referral={ref.referral}
            />
          ))}
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default References;
