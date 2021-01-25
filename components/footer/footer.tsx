import { Box, Link, Text } from "@chakra-ui/core";
import Section from "../section/section";

export default function Footer() {
  return (
    <Section padding={2} bg="#FFF">
      <Box textAlign="center">
        <Text color="#8e44ad" fontWeight={300} fontSize="xl">
          Built with ❤️ by <Link color="#2980b9" href="https://twitter.com/ameerthehacker"><strong>@ameerthehacker</strong></Link>
        </Text>
      </Box>
    </Section>
  )
}
