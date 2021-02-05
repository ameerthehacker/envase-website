import { Box, Button, Flex, Text } from '@chakra-ui/core';
import { GITHUB_REPO } from '../../constants';
import { FaApple, FaWindows, FaLinux, FaArrowDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Section from '../section/section';

function getPlatformBinary(platform: string, tag: string) {
  const version = tag.substring(1);

  if (platform.startsWith('mac')) {
    return `envase-${version}.dmg`;
  } else if (platform.startsWith('linux')) {
    return `envase-${version}.AppImage`;
  } else if (platform.startsWith('win')) {
    return `envase-${version}.exe`;
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
    <Section bg="#EBF4FF">
      <Flex alignItems="center" justifyContent="center" height="100vh">
        <Box textAlign="center">
          <Text fontWeight="600" fontSize={['2xl', '6xl']}>Homebrew for docker 🎉</Text>
          <Text fontSize={['xl', '2xl']} fontWeight="250">
            <strong>Envase</strong> removes the pain of running apps using{' '}
            <strong>docker</strong> by providing an amazing{' '}
            <strong>developer experience</strong> and an one stop shop app store
            for almost all popular applications. Stop breaking your heads with docker commands and start envasing.
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
      </Flex>
    </Section>
  );
}
