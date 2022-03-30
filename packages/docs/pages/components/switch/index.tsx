import Head from 'next/head';
import { FC, useEffect } from 'react';

import { Switch } from '@cube/components';

import CodeSnippet from '@components/CodeSnippet';
import Example from '@components/Example';
import Keyword from '@components/Keyword';
import Page from '@components/Layout/Page';
import { useSidebarContext } from '@components/Layout/SidebarContext';
import Section from '@components/Section';

const RadiosPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage('switch');
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Switch - Cube - React Components Library</title>
      </Head>
      <Page title="Switch">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Switch } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <div className="space-y-3">
              <p>
                You can change the <Keyword>Radio</Keyword> size with the{' '}
                <Keyword>area</Keyword> property. It accepts one of{' '}
                <Keyword>base</Keyword>. <Keyword>sm.</Keyword>
              </p>
              <p>
                The <Keyword>Radio</Keyword> component has two variants:{' '}
                <Keyword>filled</Keyword> and <Keyword>outline</Keyword>
              </p>
              <p>
                The use of <Keyword>Radio.Group</Keyword> is mandatory and must
                wrap your gruop of radio with it.
              </p>
            </div>
            <Example
              code={`<Switch>
  <Switch.Label>Receive email notifications</Switch.Label>
</Switch>

<Switch area="sm" defaultChecked>
  <Switch.Label>
    Receive email notifications (small)
  </Switch.Label>
</Switch>

<Switch disabled>
  <Switch.Label>
    Receive email notifications (disabled)
  </Switch.Label>
</Switch>`}
            >
              <div className="flex flex-col space-y-3">
                <Switch>
                  <Switch.Label>Receive email notifications</Switch.Label>
                </Switch>

                <Switch area="sm" defaultChecked>
                  <Switch.Label>
                    Receive email notifications (small)
                  </Switch.Label>
                </Switch>

                <Switch disabled>
                  <Switch.Label>
                    Receive email notifications (disabled)
                  </Switch.Label>
                </Switch>
              </div>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default RadiosPage;
