import { Box, Button, Flex, Stack, Text } from '@chakra-ui/core';
import Section from '../section/section';
import Rocket from './rocket.svg';
import Containers from './containers.svg';
import GH from './github.svg';
import Code from './code.svg';
import { FaStar, FaHeart } from 'react-icons/fa';
import { GITHUB_REPO } from '../../constants';

const RocketSVG = Rocket as any;
const ContainersSVG = Containers as any;
const GHSVG = GH as any;
const CodeSVG = Code as any;

const demos = {
  mysql: 'https://vimeo.com/500412505',
  node: 'https://vimeo.com/500468189',
  fullstack: 'https://vimeo.com/500477155'
}

export default function WhyEnvase() {
  return (
    <Section>
      <Flex 
        id="why-envase"
        flexWrap="wrap"
        flexDirection={[
          "row",
          "column",
          "column",
          "row"
        ]}
        alignItems="center"
        height="100vh"
        justifyContent={
          [
            "center",
            "center",
            "center",
            "space-between"
          ]
        }>
        <Box>
          <Text fontSize={["4xl", "5xl"]}>What do you get?</Text>
        </Box>
        <Flex marginTop={[8, 8, 8, 0]} maxWidth="500px" justifyContent="center" flexDirection="column">
          <Stack direction="row" spacing={5}>
            <Box>
              <RocketSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Launch databases like <strong>MySQL, PostgreSQL, MongoDB</strong> and apps like <strong>VSCode, PhpMyAdmin, PgAdmin</strong> in just few seconds.
              </Text>
              <Button onClick={() => window.open(demos.mysql)} size="sm" variant="link" marginTop={2}>View Demo</Button>
            </Box>
          </Stack>
          <Stack marginTop={10} direction="row" spacing={5}>
            <Box>
              <CodeSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Fancy learning a new language like <strong>GoLang, Python or Rust</strong> you can save yourself from the trouble of setting up the toolchain in seconds using Envase.
              </Text>
              <Button onClick={() => window.open(demos.node)} size="sm" variant="link" marginTop={2}>View Demo</Button>
            </Box>
          </Stack>
          <Stack marginTop={10} direction="row" spacing={5}>
            <Box>
              <ContainersSVG height="70px" />
            </Box>
            <Box>
              <Text fontSize="1xl">
                Run fullstack apps like <strong>Hasura, Wordpress, Joomla</strong> with ease and confidence. Envase creates and connects multiple containers over a common network without you ever having to think about it.
              </Text>
              <Button onClick={() => window.open(demos.fullstack)} size="sm" variant="link" marginTop={2}>View Demo</Button>
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
              <a href={`https://github.com/${GITHUB_REPO}`} target="blank" tabIndex={-1}>
                <Button size="sm" variant="link" marginTop={2}>View Source</Button>
              </a>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Section>
  );
}
