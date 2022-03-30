import Head from 'next/head';
import { FC, useEffect } from 'react';

import { Alert } from '@cube/components';

import CodeSnippet from '@components/CodeSnippet';
import Example from '@components/Example';
import Keyword from '@components/Keyword';
import Page from '@components/Layout/Page';
import { useSidebarContext } from '@components/Layout/SidebarContext';
import Section from '@components/Section';

const AlertPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage('alerts');
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Alert - Cube - React Components Library</title>
      </Head>
      <Page title="Alert">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Alert } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <Example
              code={`<Alert>
  <Alert.Title>Info alert!</Alert.Title> Change a few things up
  and try submitting again.
</Alert>
<Alert color="success">
  <Alert.Title>Success alert!</Alert.Title> Change a few things
  up and try submitting again.
</Alert>
<Alert color="error">
  <Alert.Title>Error alert!</Alert.Title> Change a few things up
  and try submitting again.
</Alert>
<Alert color="warning">
  <Alert.Title>Warning alert!</Alert.Title> Change a few things
  up and try submitting again.
</Alert>`}
            >
              <div className="w-full space-y-3">
                <Alert>
                  <Alert.Title>Info alert!</Alert.Title> Change a few things up
                  and try submitting again.
                </Alert>
                <Alert color="success">
                  <Alert.Title>Success alert!</Alert.Title> Change a few things
                  up and try submitting again.
                </Alert>
                <Alert color="error">
                  <Alert.Title>Error alert!</Alert.Title> Change a few things up
                  and try submitting again.
                </Alert>
                <Alert color="warning">
                  <Alert.Title>Warning alert!</Alert.Title> Change a few things
                  up and try submitting again.
                </Alert>
              </div>
            </Example>

            <Example
              code={`<Alert variant="filled">
  <Alert.Title>Info alert!</Alert.Title> Change a few things up
  and try submitting again.
</Alert>
<Alert variant="filled" color="success">
  <Alert.Title>Success alert!</Alert.Title> Change a few things
  up and try submitting again.
</Alert>
<Alert variant="filled" color="error">
  <Alert.Title>Error alert!</Alert.Title> Change a few things up
  and try submitting again.
</Alert>
<Alert variant="filled" color="warning">
  <Alert.Title>Warning alert!</Alert.Title> Change a few things
  up and try submitting again.
</Alert>`}
            >
              <div className="w-full space-y-3">
                <Alert variant="filled">
                  {' '}
                  <Alert.Title>Info alert!</Alert.Title> Change a few things up
                  and try submitting again.
                </Alert>
                <Alert variant="filled" color="success">
                  {' '}
                  <Alert.Title>Success alert!</Alert.Title> Change a few things
                  up and try submitting again.
                </Alert>
                <Alert variant="filled" color="error">
                  {' '}
                  <Alert.Title>Error alert!</Alert.Title> Change a few things up
                  and try submitting again.
                </Alert>
                <Alert variant="filled" color="warning">
                  {' '}
                  <Alert.Title>Warning alert!</Alert.Title> Change a few things
                  up and try submitting again.
                </Alert>
              </div>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default AlertPage;
