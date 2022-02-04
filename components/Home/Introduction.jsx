// Components
import {
  Slide,
  Box,
  Heading,
  Text,
  Flex,
  Image,
  chakra
} from '@chakra-ui/react';

const Introduction = () => {
  return (
    <Box>
      <Flex justify='space-between' align='center'>
        <Box>
          <Text variant='bolder' color='teal.300'>
            Hello, my name is
          </Text>
          <Heading variant='huge'>
            Ryan Le
          </Heading>

          <Text variant='subtitle'>
            I'm currently a <chakra.span color='teal.300' fontWeight={600}>Web Engineer III</chakra.span> at American Express,
          </Text>
          <Text variant='subtitle'>
            working on all things front-end.
          </Text>

          <Box mt={10}>
            <Text variant='body' color='gray'>
              🚀 &nbsp; Exploring opportunities, side projects, freelancing and more.
            </Text>
            <Text variant='body' color='gray'>
              🎓 &nbsp; University of Nebraska-Lincoln Alumni. Degree in Software Engineering.
            </Text>
            <Text variant='body' color='gray'>
              🏙️  &nbsp; Currently based out of New York City.
            </Text>

            <Heading
              variant='subtitle'
              mt={10}
            >
              Connect with me on Social Media!
            </Heading>
          </Box>
        </Box>

        <Box mr={[0, '100px']}>
          <Image
            src='https://i.imgur.com/TAchISX.jpg'
            width={400}
            borderRadius='full'
            boxShadow='md'
            mt={10}
          />
          <Text
            fontSize='lg'
            color='gray'
            mt={5}
            align='center'
            mb={[5, 5, 5, 0]}
          >
            Sandpoint, Idaho, March 2020
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Introduction;
