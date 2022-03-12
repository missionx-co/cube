import { FC, useEffect } from "react";
import Head from "next/head";

import { Input } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const TextAreaPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("textarea");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Textarea - Cube - React Components Library</title>
      </Head>
      <Page title="Textarea">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Input } from '@cube/components'"}
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
              <Input.Textarea placeholder="Value goes here" />
              <Input.Textarea placeholder="Value goes here" disabled />
              <Input.Textarea placeholder="Value goes here" error />
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default TextAreaPage;
