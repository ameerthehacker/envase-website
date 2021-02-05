import { Box, Button, Flex, Stack, Text } from '@chakra-ui/core';
import Section from '../section/section';
import Rocket from './rocket.svg';
import Containers from './containers.svg';
import GH from './github.svg';
import Code from './code.svg';
import { FaStar, FaHeart } from 'react-icons/fa';

const RocketSVG = Rocket as any;
const ContainersSVG = Containers as any;
const GHSVG = GH as any;
const CodeSVG = Code as any;

export default function WhyEnvase() {
  return (
    <Section>
      <Flex id="why-envase" flexWrap="wrap" flexDirection="row" alignItems="center" height="100vh" justifyContent="space-between">
        <Box>
          <Text fontSize="5xl">What do you get?</Text>
        </Box>
        <Flex maxWidth="500px" justifyContent="center" flexDirection="column">
          <Stack direction="row" spacing={5}>
            <Box>
              <RocketSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Launch databases like <strong>MySQL, PostgreSQL, MongoDB</strong> and apps like <strong>VSCode, PhpMyAdmin, PgAdmin</strong> in just few seconds.
              </Text>
              <Button size="sm" variant="link" marginTop={2}>View Demo</Button>
            </Box>
          </Stack>
          <Stack marginTop={10} direction="row" spacing={5}>
            <Box>
              <CodeSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Fancy learning a new language like <strong>GoLang, Python or Rust</strong> but lazy to install all the required toolchain? we have got you covered with one click language tooling setup.
              </Text>
              <Button size="sm" variant="link" marginTop={2}>View Demo</Button>
            </Box>
          </Stack>
          <Stack marginTop={10} direction="row" spacing={5}>
            <Box>
              <ContainersSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Run fullstack apps like <strong>Hasura, Wordpress, Drupal</strong> with ease and confidence. Envase creates and connects multiple containers over a common network without you ever having to think about it.
              </Text>
              <Button size="sm" variant="link" marginTop={2}>View Demo</Button>
            </Box>
          </Stack>
          <Stack marginTop={10} direction="row" spacing={5}>
            <Box>
              <GHSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                We are <strong>Open Source</strong>, show your love by <FaStar style={{ display: 'inline', color: 'yellow' }} /> the repo. We are also open for contributions <FaHeart style={{ display: 'inline', color: 'red' }} />
              </Text>
              <a href="https://github.com/ameerthehacker/envase" target="blank">
                <Button size="sm" variant="link" marginTop={2}>View Source</Button>
              </a>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Section>
  );
}
