import { FC, useEffect } from "react";
import Head from "next/head";

import { Select } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const options = [
  {
    id: "one",
    value: "one",
    text: "Option one",
  },
  {
    id: "two",
    value: "two",
    text: "Option two",
  },
  {
    id: "three",
    value: "three",
    text: "Option three",
    disabled: true,
  },
  {
    id: "group",
    value: "group",
    text: "Options group",
    children: [
      {
        id: "group-one",
        value: "group-one",
        text: "Option group - option one",
      },
      {
        id: "group-two",
        value: "group-two",
        text: "Option group - option two",
      },
    ],
  },
];

const SelectPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("select");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Select - Cube - React Components Library</title>
      </Head>
      <Page
        title="Select"
        description="Select components are used for collecting user provided information from a list of options"
      >
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Select } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section
            title="Usage"
            description={
              <>
                The <Keyword>Select</Keyword> component can take any prop that a
                normal <Keyword>Select</Keyword> can have.
              </>
            }
          >
            <Example
              code={`const options = [
  {
    id: "one",
    value: "one",
    text: "Option one",
  },
  {
    id: "two",
    value: "two",
    text: "Option two",
  },
  {
    id: "three",
    value: "three",
    text: "Option three",
    disabled: true,
  },
  {
    id: "group",
    value: "group",
    text: "Options group",
    children: [
      {
        id: "group-one",
        value: "group-one",
        text: "Option group - option one",
      },
      {
        id: "group-two",
        value: "group-two",
        text: "Option group - option two",
      },
    ],
  },
];

<Select placeholder="Please select an option" options={options} />
<Select placeholder="Please select an option" options={options} disabled />
<Select placeholder="Please select an option" options={options} error />`}
            >
              <Select placeholder="Please select an option" options={options} />
              <Select
                placeholder="Please select an option"
                options={options}
                disabled
              />
              <Select
                placeholder="Please select an option"
                options={options}
                error
              />
            </Example>
          </Section>
          <Section title="Fancy Select">
            <Example code="">
              <Select.Fancy
                placeholder="Select an option"
                aria-label="Fancy Select"
              >
                <Select.Item key="one">Option one</Select.Item>
                <Select.Item key="two">Option two</Select.Item>
                <Select.Section key="group" title="Option group">
                  <Select.Item key="three">Option three</Select.Item>
                  <Select.Item key="four">Option four</Select.Item>
                </Select.Section>
              </Select.Fancy>
              <Select.Fancy
                placeholder="Select an option"
                aria-label="Fancy Select"
                disabled
              >
                <Select.Item key="one">Option one</Select.Item>
                <Select.Item key="two">Option two</Select.Item>
                <Select.Item key="three">Option three</Select.Item>
              </Select.Fancy>
              <Select.Fancy
                placeholder="Select an option"
                aria-label="Fancy Select"
                error
              >
                <Select.Item key="one">Option one</Select.Item>
                <Select.Item key="two">Option two</Select.Item>
                <Select.Item key="three">Option three</Select.Item>
              </Select.Fancy>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default SelectPage;
