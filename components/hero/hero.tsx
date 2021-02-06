import { Box, Button, Flex, Stack, Text } from '@chakra-ui/core';
import { GITHUB_REPO } from '../../constants';
import { FaApple, FaWindows, FaLinux, FaArrowDown, FaTwitter, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Section from '../section/section';
import styles from './hero.module.css';
import Logo from './containers.svg';
import Go from './gopher.svg';
import Postgres from './postgres.svg';
import ES from './es.svg';
import Redis from './redis.svg';
import MySQL from './mysql.svg';
import Hasura from './hasura.svg';

const LogoSVG = Logo as any;
const GoSVG = Go as any;
const PostgresSVG = Postgres as any;
const ESSVG = ES as any;
const RedisSVG = Redis as any;
const MySQLSVG = MySQL as any;
const HasuraSVG = Hasura as any;

function getPlatformBinary(platform: string, tag: string) {
  const version = tag.substring(1);

  if (platform.startsWith('mac')) {
    return `envase-${version}.dmg`;
  } else if (platform.startsWith('linux')) {
    return `envase-${version}.AppImage`;
  } else if (platform.startsWith('win')) {
    return `envase-Setup-${version}.exe`;
  }
}

function getPlatformIcon(platform: string) {
  if (platform.startsWith('mac')) {
    return FaApple;
  } else if (platform.startsWith('linux')) {
    return FaLinux;
  } else if (platform.startsWith('win')) {
    return FaWindows;
  }
}

export default function Hero({
  latestReleaseTag
}: {
  latestReleaseTag: string;
}) {
  const [platform, setPlatform] = useState('');
  const downloadLink = latestReleaseTag
    ? `https://github.com/${GITHUB_REPO}/releases/download/${latestReleaseTag}/${getPlatformBinary(
        platform,
        latestReleaseTag
      )}`
    : `https://github.com/${GITHUB_REPO}/releases`;

  useEffect(() => {
    setPlatform(navigator.platform.toLowerCase());
  }, []);

  return (
    <Section>
      <Box height="100vh">
        <Flex justifyContent="space-between">
          <Stack paddingTop="30px" spacing={2} direction="row" alignItems="center"> 
            <Box>
              <LogoSVG height="45px" />
            </Box>
            <Text fontSize="3xl" fontWeight="300">Envase</Text>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={5}>
            <Box>
              <a href={`https://github.com/${GITHUB_REPO}`} target="blank">
                <Stack paddingTop="30px" spacing={2} direction="row" alignItems="center"> 
                  <Box>
                    <FaGithub size="1.4em" />
                  </Box>
                  <Text display={["none", "none", "inline", "inline"]} fontSize="xl" fontWeight="300">View Source</Text>
                </Stack>
              </a>
            </Box>
            <Box>
              <a href="https://twitter.com/Envase12" target="blank">
                <Stack paddingTop="30px" spacing={2} direction="row" alignItems="center"> 
                  <Box>
                    <FaTwitter color="#20A1F1" size="1.4em" />
                  </Box>
                  <Text display={["none", "none", "inline", "inline"]} fontSize="xl" fontWeight="300">Follow US</Text>
                </Stack>
              </a>
            </Box>
          </Stack>
        </Flex>
        <Flex height="calc(100vh - 75px)" alignItems="center" flexDirection="column" justifyContent="center">
          <Box textAlign="center">
            <Text className={styles.title} fontWeight="600" fontSize={['4xl', '6xl']}>Homebrew for docker 🎉</Text>
            <Text fontSize={['xl', '2xl']} fontWeight="250">
              Envase removes the pain of running apps using{' '}
              <strong>docker</strong> by providing an amazing{' '}
              <strong>developer experience</strong> and an one stop shop app store
              for almost all popular applications. Stop breaking your heads with docker commands and start <strong>envasing</strong>.
            </Text>
            <Button
              leftIcon={getPlatformIcon(platform)}
              onClick={() => {
                window.open(downloadLink);
              }}
              marginTop={5}
              size="lg"
              variantColor="purple"
              variant="solid"
              borderRadius="75px"
              color="white"
              px={20}
              py={8}
            >
              Download
            </Button>
            <a href="#why-envase">
              <Button
                leftIcon={FaArrowDown}
                marginTop={5}
                size="lg"
                variantColor="orange"
                variant="solid"
                borderRadius="75px"
                color="white"
                px={20}
                py={8}
                ml={3}
              >
                Read More
              </Button>
            </a>
          </Box>
          <Box overflow="hidden" width="330px">
            <Stack className={styles.slides} direction="row" alignItems="center" spacing={5} marginTop="50px">
              <Box height="100px">
                <GoSVG height="100px" width="71px" preserveAspectRatio="none" />
              </Box>
              <Box>
                <PostgresSVG height="100px" width="100px" preserveAspectRatio="none"  />
              </Box>
              <Box>
                <ESSVG height="100px" width="100px" preserveAspectRatio="none"  />
              </Box>
              <Box>
                <RedisSVG height="100px" width="100px" preserveAspectRatio="none"  />
              </Box>
              <Box>
                <MySQLSVG height="68px" width="100px" preserveAspectRatio="none"  />
              </Box>
              <Box>
                <HasuraSVG height="100px" width="68px" preserveAspectRatio="none"  />
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Section>
  );
}
