// Components
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  TableCaption,
  useMediaQuery,
} from '@chakra-ui/react';
import SkillRow from './SkillRow';

const SkillTable = ({ caption, skills }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 1200px)');

  return (
    <Box overflowX='scroll'>
      <Table
        variant='simple'
        size='sm'
        mb={20}
        width='full'
      >
        <TableCaption>
          {caption}
        </TableCaption>
        <Thead>
          <Th>Technology</Th>
          {!isMobileScreen && <Th>Experiences</Th>}
          <Th>Confidence</Th>
        </Thead>
        <Tbody>
          {skills?.map((skill) => (
            <SkillRow
              key={skill.technology}
              imageUrl={skill.imageUrl}
              radii={true}
              name={skill.technology}
              experiences={skill.experiences}
              confidence={skill.confidence}
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SkillTable;
