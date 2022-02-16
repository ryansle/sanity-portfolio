// Components
import { Tr, Td, Text, useColorModeValue } from '@chakra-ui/react';
import { StarIcon as Star } from '@chakra-ui/icons';

const LegendCell = ({ amount }) => {
  const activeStarColor = useColorModeValue('teal.500', 'teal.300');
  const inactiveStarColor = useColorModeValue('gray.500', 'gray.300');

  const renderText = (stars) => {
    switch (stars) {
      case 5:
        return 'I know exactly what I\'m doing.';
      case 4:
        return 'I have an advanced understanding of it.';
      case 3:
        return 'I\'m as good as the next person with it.';
      case 2:
        return 'I know my way around the documentation.';
      case 1:
        return 'I have a beginner\'s level understanding.';
      default:
        return '';
    }
  };

  return (
    <Tr>
      <Td width='38%'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <Star
              key={i}
              color={i < amount ? activeStarColor : inactiveStarColor}
              mr={[0, null, 1]}
            />
          ))}
      </Td>
      <Td>
        <Text fontSize='md'>
          {renderText(amount)}
        </Text>
      </Td>
    </Tr>
  );
};

export default LegendCell;
