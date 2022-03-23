import { FC, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { Select, FancySelect } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const options = [
  {
    id: "one",
    text: "Option one",
  },
  {
    id: "two",
    text: "Option two",
  },
  {
    id: "three",
    text: "Option three",
    disabled: true,
  },
  {
    id: "group",
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

const people = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Gilberto Miguel",
    username: "@gilberto_miguel",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Maia Pettegree",
    username: "@mpettegree",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Wade Redington",
    username: "@redington",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Kurtis Gurrado",
    username: "@kurtis",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Sonja Balmann",
    username: "@sbalmann",
  },
  {
    id: 6,
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Brent Mickelwright",
    username: "@brent_m",
  },
];

const CustomizedOption: FC<{ item: any }> = ({ item }) => (
  <>
    <span className="w-14 h-14 flex flex-shrink-0 overflow-hidden rounded-full">
      <Image src={item.avatar} alt={item.text} height={56} width={56} />
    </span>
    <span className="flex flex-col items-start">
      <span className="text-xl font-semibold">{item.text}</span>
      <span className="text-gray-500">{item.username}</span>
    </span>
  </>
);

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
            <Example
              code={`<FancySelect
  placeholder="Please select an option"
  options={options}
/>
<FancySelect
  placeholder="Please select an option"
  options={options}
  disabled
/>
<FancySelect
  placeholder="Please select an option"
  options={options}
  error
/>`}
            >
              <FancySelect
                placeholder="Please select an option"
                options={options}
              />
              <FancySelect
                placeholder="Please select an option"
                options={options}
                disabled
              />
              <FancySelect
                placeholder="Please select an option"
                options={options}
                error
              />
            </Example>

            <Section.Title>Customization</Section.Title>
            <p>
              Use <Keyword>inputRenderer</Keyword> &{" "}
              <Keyword>optionRenderer</Keyword> to customize the lock of the
              custom select
            </p>
            <Example
              code={`const people = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Gilberto Miguel",
    username: "@gilberto_miguel",
  },
  ...
];

const CustomizedOption: FC<{ item: any }> = ({ item }) => (
  <>
    <span className="w-14 h-14 flex flex-shrink-0 overflow-hidden rounded-full">
      <Image src={item.avatar} alt={item.text} height={56} width={56} />
    </span>
    <span className="flex flex-col items-start">
      <span className="text-xl font-semibold">{item.text}</span>
      <span className="text-gray-500">{item.username}</span>
    </span>
  </>
);

<FancySelect
  placeholder="Please select a user account"
  options={people}
  inputRenderer={({
    selected,
    disabled,
    placeholder,
    error,
    ref,
  }) => {
    const item = selected as any;
    return (
      <FancySelect.Input
        ref={ref as any}
        disabled={disabled}
        error={error}
        className="items-center justify-start space-x-2"
      >
        {item ? (
          <CustomizedOption item={item} />
        ) : (
          <span className="h-14 inline-flex items-center">
            {placeholder}
          </span>
        )}
      </FancySelect.Input>
    );
  }}
  optionRenderer={({ selected, active, disabled, option }) => (
    <FancySelect.Option
      selected={selected}
      active={active}
      disabled={disabled}
      className="justify-start border border-gray-200 border-dotted"
    >
      <CustomizedOption item={option} />
    </FancySelect.Option>
  )}
/>`}
            >
              <FancySelect
                placeholder="Please select a user account"
                options={people}
                inputRenderer={({
                  selected,
                  disabled,
                  placeholder,
                  error,
                  ref,
                }) => {
                  const item = selected as any;
                  return (
                    <FancySelect.Input
                      ref={ref as any}
                      disabled={disabled}
                      error={error}
                      className="items-center justify-start space-x-2"
                    >
                      {item ? (
                        <CustomizedOption item={item} />
                      ) : (
                        <span className="h-14 inline-flex items-center">
                          {placeholder}
                        </span>
                      )}
                    </FancySelect.Input>
                  );
                }}
                optionRenderer={({ selected, active, disabled, option }) => (
                  <FancySelect.Option
                    selected={selected}
                    active={active}
                    disabled={disabled}
                    className="justify-start border border-gray-200 border-dotted"
                  >
                    <CustomizedOption item={option} />
                  </FancySelect.Option>
                )}
              />
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default SelectPage;
