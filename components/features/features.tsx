import { Box, Text } from '@chakra-ui/core';
import Section from '../section/section';
import Vimeo from '../vimeo/vimeo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Features() {
  const sampleCode = `const sequelize = new Sequelize('my-db', 'my-user', 'my-password', {
  // name of the MySQL database that we created using Envase in previous demo video
  host: 'my-db',
  dialect: 'mysql'
});`;
  return (
    <>
      <Section bg="#EBF4FF">
        <Text id="features" fontSize={['2xl', '4xl']}>
          🔨 Language Tools
        </Text>
        <Text fontSize="lg">
          Fancy learning a new language? Envase can help you with one click setup
          of the toolchain required to get started, the below video demonstrates
          how you can start coding in <strong>NodeJS in matter of seconds</strong>{' '}
          without installing anything 🎉 The projects directory you chose in
          Envase will be shared under <strong>/projects</strong> directory in the
          container.
        </Text>
        <Box marginTop={5}>
          <Vimeo id="500468189" />
        </Box>
      </Section>
      <Section bg="#FFF">
        <Text id="features" fontSize={['2xl', '4xl']}>
          💻 Databases
        </Text>
        <Text fontSize="lg">
          Run databases like <strong>DynamoDB, MySQL, Postgres</strong> and apps like <strong>PhpMyAdmin and PgAdmin</strong> to visualize data in those databases in seconds. You can also connect to those database apps from a <strong>NodeJS envase app</strong> using the database app name as host. The below code snippet showcases an example using sequelize but it is not restrcited to just that and you can use any supported client to connect to MySQL from NodeJS.
          <SyntaxHighlighter showLineNumbers={true} language="javascript">
            {sampleCode}
          </SyntaxHighlighter>
        </Text>
      </Section>
      <Section bg="#EBF4FF">
        <Text id="features" fontSize={['2xl', '4xl']}>
          😇 Fullstack Apps
        </Text>
        <Text fontSize="lg">
          Run fullstack applications like <strong>Hasura</strong> and <strong>Wordpress</strong> that connect to a Database backend within seconds. Envase creates two independent containers for you and connects them both using a common network.
        </Text>
        <Box marginTop={5}>
          <Vimeo id="500477155" />
        </Box>
      </Section>
    </>
  );
}
