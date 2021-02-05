import { Box, Flex } from '@chakra-ui/core';
import { ReactNode } from 'react';

type SectionProps = { children: ReactNode, id?: string, padding?: number };

export default function Section({ children, id, padding = 6 }: SectionProps) {
  return (
    <Flex id={id} paddingLeft={padding} paddingRight={6} justifyContent="center">
      <Box maxWidth="1100px" width="100%">
        {children}
      </Box>
    </Flex>
  );
}
