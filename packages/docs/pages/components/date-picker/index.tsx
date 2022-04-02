import Head from 'next/head';
import { FC, useEffect } from 'react';

import { DatePicker } from '@cube/components';

import CodeSnippet from '@components/CodeSnippet';
import Example from '@components/Example';
import Keyword from '@components/Keyword';
import Page from '@components/Layout/Page';
import { useSidebarContext } from '@components/Layout/SidebarContext';
import Section from '@components/Section';

const DatePickerPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage('date-picker');
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Date & Time Pickers - Cube - React Components Library</title>
      </Head>
      <Page title="Textarea">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { DatePicker } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section
            title="Usage"
            description={
              <>
                The <Keyword>Input</Keyword> component can take any prop that a
                normal <Keyword>textarea</Keyword> can have.
              </>
            }
          >
            <Example
              code={`<Input.Textarea placeholder="Value goes here" />
<Input.Textarea placeholder="Value goes here" disabled />
<Input.Textarea placeholder="Value goes here" error />`}
            >
              <DatePicker />
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default DatePickerPage;
