// Components
import { Box, Heading, Grid } from '@chakra-ui/react';
import Reference from './Reference';

// Utilities
import { fetchReferrals } from '../../data/fetch';
import { useQuery } from 'react-query';

const References = () => {
  const { data, isLoading } = useQuery('referrals', fetchReferrals);

  console.log(data);

  return (
    <Box>
      <Heading fontSize='4xl' mb={5}>
        Professional References
      </Heading>

      <Grid
        templateRows={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={5}
      >
        {data?.map((ref) => (
          <Reference
            key={ref.name}
            name={ref.name}
            title={ref.title}
            imgPath={ref.imageUrl}
            referral={ref.referral}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default References;
