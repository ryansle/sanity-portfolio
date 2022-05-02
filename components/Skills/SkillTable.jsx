// Components
import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
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
          <Th width={['40%', '20%']}>
            Technology
          </Th>
          {!isMobileScreen && (
            <Th width='60%'>
              Experiences
            </Th>
          )}
          <Th width={['10%', '20%']}>
            Confidence
          </Th>
        </Thead>
        <Tbody>
          {skills?.map((skill) => (
            <SkillRow
              key={skill.technology}
              imageUrl={skill.imageUrl}
              radii={skill.radii}
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
