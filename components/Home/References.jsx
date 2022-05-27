// Components
import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import Reference from './Reference';

// Utilities
import { fetchReferrals } from '../../data/fetch';
import { useQuery } from 'react-query';
import useMediaQuery from '../../hooks/useMediaQuery';

const References = () => {
  const { data } = useQuery('referrals', fetchReferrals);
  const isDesktopScreen = useMediaQuery(1200);

  return (
    <Box width='full'>
      <Heading fontSize='4xl' mb={5}>
        Professional References
      </Heading>

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {isDesktopScreen && (
          <>
            <Stack spacing={4}>
              {data?.slice(0, 2).map((ref) => (
                <Reference
                  key={ref.name}
                  name={ref.name}
                  title={ref.title}
                  imgPath={ref.imageUrl}
                  referral={ref.referral}
                  linkedin={ref.linkedin}
                  email={ref.email}
                />
              ))}
            </Stack>

            <Stack spacing={4}>
              {data?.slice(2, 4).map((ref) => (
                <Reference
                  key={ref.name}
                  name={ref.name}
                  title={ref.title}
                  imgPath={ref.imageUrl}
                  referral={ref.referral}
                  linkedin={ref.linkedin}
                  email={ref.email}
                />
              ))}
            </Stack>

            <Stack spacing={4}>
              {data?.slice(4, 10).map((ref) => (
                <Reference
                  key={ref.name}
                  name={ref.name}
                  title={ref.title}
                  imgPath={ref.imageUrl}
                  referral={ref.referral}
                  linkedin={ref.linkedin}
                  email={ref.email}
                />
              ))}
            </Stack>
          </>
        )}

        {!isDesktopScreen && (
          <>
            <Stack spacing={4}>
              {data?.slice(0, 3).map((ref) => (
                <Reference
                  key={ref.name}
                  name={ref.name}
                  title={ref.title}
                  imgPath={ref.imageUrl}
                  referral={ref.referral}
                  linkedin={ref.linkedin}
                  email={ref.email}
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
                  linkedin={ref.linkedin}
                  email={ref.email}
                />
              ))}
            </Stack>
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default References;
