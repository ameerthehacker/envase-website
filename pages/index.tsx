import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import App from '../components/app/app';
import fetch from 'isomorphic-fetch';
import { GITHUB_REPO } from '../constants';
import { NextSeo } from 'next-seo';
import absoluteUrl from "next-absolute-url";

export default function Index({
  latestReleaseTag,
  origin
}: {
  latestReleaseTag: string;
  origin: string;
}) {
  return (
    <>
      <NextSeo
        title="Envase"
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#09101E"
          }
        ]}
        description={`Envase removes the pain of running apps using docker by providing an amazing developer experience and an one stop shop app store for almost all popular applications.`}
        openGraph={{
          title: "Envase",
          description: "Envase removes the pain of running apps using docker by providing an amazing developer experience and an one stop shop app store for almost all popular applications.",
          images: [{
            url: `${origin}/logo.png`,
            height: 256,
            width: 256
          }]
        }}
      />
      <ThemeProvider>
        <CSSReset />
        <App latestReleaseTag={latestReleaseTag} />
      </ThemeProvider>
    </>
  );
}

Index.getInitialProps = async ({ req }: any) => {
  const { origin } = absoluteUrl(req);

  try {
    const latestTag = await (
      await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
    ).json();

    return { latestReleaseTag: latestTag.name, origin };
  } catch {
    return { latestReleaseTag: null, origin };
  }
};
