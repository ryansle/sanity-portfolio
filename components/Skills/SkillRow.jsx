// Components
import {
  Tr,
  Td,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react';
import { StarIcon as Star } from '@chakra-ui/icons';

const SkillRow = ({ imageUrl, radii, name, experiences, confidence }) => {
  const activeStarColor = useColorModeValue('teal.500', 'teal.300');
  const inactiveStarColor = useColorModeValue('gray.500', 'gray.300');
  const [isMobileScreen] = useMediaQuery('(max-width: 1200px)');

  return (
    <Tr>
      <Td>
        <Flex align='center'>
          <Image
            src={imageUrl}
            width='35px'
            height='35px'
            mr={3}
            borderRadius={radii ? 'full' : 'none'}
          />
          <Text fontWeight='bold' fontSize='lg'>
            {name}
          </Text>
        </Flex>
      </Td>

      {!isMobileScreen && (
        <Td>
          <Text fontSize='md'>
            {experiences.map((experience, index) => (
              index !== experiences.length - 1 ? `${experience}, ` : `${experience}`
            ))}
          </Text>
        </Td>
      )}

      <Td>
        {Array(5).fill('').map((_, i) => (
          <Star
            key={i}
            color={i < confidence ? activeStarColor : inactiveStarColor}
            mr={[0, 1]}
          />
        ))}
      </Td>
    </Tr>
  );
};

export default SkillRow;
