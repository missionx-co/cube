import { FC, useEffect } from "react";
import Head from "next/head";

import { FormControl, Input } from "@cube/components";

import Page from "@components/Layout/Page";
import Section from "@components/Section";
import Keyword from "@components/Keyword";
import Example from "@components/Example";

import { useSidebarContext } from "@components/Layout/SidebarContext";
import CodeSnippet from "@components/CodeSnippet";

interface IInputs {}

const Inputs: FC<IInputs> = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("inputs");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Input fields - Cube - React Components Library</title>
      </Head>
      <Page
        title="Input fields"
        description="Input fields allow users to enter text into a UI. They typically appear in forms and dialogs. Input fields on mobiles should be at least 16px text size to avoid auto zoom on mobile browsers."
      >
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>{`import { Input } from '@cube/components'`}</CodeSnippet>
          </Section>

          <Section
            title="Usage"
            description={
              <>
                The <Keyword>Input</Keyword> component can take any prop that a
                normal <Keyword>input</Keyword> can have.
              </>
            }
          >
            <Example
              code={`<Input placeholder="jhon.doe@example.com" />
<Input placeholder="Disabled input" disabled />
<Input placeholder="Input with an error" error />`}
            >
              <Input placeholder="jhon.doe@example.com" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Input with an error" error />
            </Example>
          </Section>

          <Section
            title="Customization"
            description={
              <>
                use <Keyword>className</Keyword> property to pass Tailwind CSS
                classes to customize the <Keyword>Input</Keyword> component
                however you want.
              </>
            }
          >
            <Example
              code={`<div className="flex w-96">
  <span className="px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-l-lg">
    https://
  </span>
  <Input
    placeholder="mohammedmanssour.me"
    className="border-l-0 rounded-l-none"
  />
</div>`}
            >
              <div className="flex w-96">
                <span className="px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-l-lg">
                  https://
                </span>
                <Input
                  placeholder="mohammedmanssour.me"
                  className="border-l-0 rounded-l-none"
                />
              </div>
            </Example>
          </Section>

          <Section
            title="Form Control"
            description={
              <>
                <Keyword>FormControl</Keyword> component consists of label, hint
                text and an error message. In case <Keyword>error</Keyword>{" "}
                property is populated, hint message won't showup even if the{" "}
                <Keyword>hint</Keyword> property is populated.
              </>
            }
          >
            <Example
              code={`import { FormControl } from '@cube/components'

<FormControl id="email" fieldLabel="Email" hint="Enter your email.">
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

export default Inputs;
