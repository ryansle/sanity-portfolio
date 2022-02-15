// Components
import {
  Box,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  TableCaption,
  chakra,
} from '@chakra-ui/react';
import LegendCell from './LegendCell';

const Legend = () => (
  <Box
    width='full'
    borderWidth='1px'
    borderRadius='lg'
    p={3}
    mt={[5, 0]}
  >
    <Table variant='simple' size='sm'>
      <TableCaption>
        <chakra.span fontWeight='bold'>Note:</chakra.span> All rankings are relative - I am by no means a senior-level engineer just because I'm extra confident about something.
      </TableCaption>
      <Thead>
        <Tr>
          <Th>Confidence</Th>
          <Th>Meaning</Th>
        </Tr>
      </Thead>
      <Tbody>
        <LegendCell amount={5} />
        <LegendCell amount={4} />
        <LegendCell amount={3} />
        <LegendCell amount={2} />
        <LegendCell amount={1} />
      </Tbody>
    </Table>
  </Box>
);

export default Legend;
