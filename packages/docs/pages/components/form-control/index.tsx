import { FC, useEffect } from "react";
import Head from "next/head";

import { Input, FormControl } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

interface IFormControl {}

const FormControlPage: FC<IFormControl> = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("form-control");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Form Control - Cube - React Components Library</title>
      </Head>
      <Page
        title="Form Control"
        description={
          <>
            <Keyword>FormControl</Keyword> component consists of label, hint
            text and an error message. In case <Keyword>error</Keyword> property
            is populated, hint message won{"'"}t showup even if the{" "}
            <Keyword>hint</Keyword> property is populated.
          </>
        }
      >
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import {FormControl} from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <Example
              code={`<FormControl id="email" fieldLabel="Email" hint="Enter your email.">
  <Input name="email" id="email" placeholder="jhon.doe@example.com" />
</FormControl>

<FormControl id="email" fieldLabel="Email" hint="Enter your email." error="Email is invalid">
  <Input name="email" id="email" placeholder="jhon.doe@example.com" error />
</FormControl>`}
            >
              <FormControl
                id="email-1"
                fieldLabel="Email"
                hint="Enter your email."
              >
                <Input
                  id="email-1"
                  name="email-1"
                  placeholder="jhon.doe@example.com"
                />
              </FormControl>

              <FormControl
                id="email-2"
                fieldLabel="Email"
                hint="Enter your email."
                error="Email is invalid"
              >
                <Input
                  id="email-2"
                  name="email-2"
                  placeholder="jhon.doe@example.com"
                  error
                />
              </FormControl>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default FormControlPage;
