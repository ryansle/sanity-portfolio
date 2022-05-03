// Components
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
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

      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {data?.map((ref) => (
          <Reference
            key={ref.name}
            name={ref.name}
            title={ref.title}
            imgPath={ref.imageUrl}
            referral={ref.referral}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default References;
