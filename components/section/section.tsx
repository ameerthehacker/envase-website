import { Box, Flex } from '@chakra-ui/core';
import { ReactNode } from 'react';

type SectionProps = { children: ReactNode; bg: string; id?: string, padding?: number };

export default function Section({ children, bg, id, padding = 6 }: SectionProps) {
  return (
    <Flex id={id} bg={bg} padding={padding} justifyContent="center">
      <Box maxWidth="1100px" width="100%">
        {children}
      </Box>
    </Flex>
  );
}
