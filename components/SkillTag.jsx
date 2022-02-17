// Components
import { Tag, TagLabel, Image } from '@chakra-ui/react';

const SkillTag = ({ name, icon, radii }) => {
  return (
    <Tag size='sm' mr={2} mb={1} p={1}>
      <Image
        src={icon}
        width='15px'
        height='15px'
        mr={2}
        borderRadius={radii ? 'full' : 'none'}
      />
      <TagLabel>
        {name}
      </TagLabel>
    </Tag>
  );
};

export default SkillTag;
