// Components
import { Badge } from '@chakra-ui/react';

const CompanyTag = ({ content }) => {
  const renderColorScheme = (content) => {
    switch (content) {
      case 'American Express':
        return 'blue';
      case 'Nelnet':
        return 'green';
      case 'Hoffman Strategy Group':
        return 'orange';
      case 'Grouve':
        return 'teal';
      case 'University of Nebraska-Lincoln':
        return 'red';
      case 'Raven Industries':
        return 'cyan'
      case 'Personal Use':
        return 'gray';

      default:
        return;
    }
  };

  return (
    <Badge
      mr={1}
      p={1}
      colorScheme={renderColorScheme(content)}
    >
      {content}
    </Badge>
  );
};

export default CompanyTag;
