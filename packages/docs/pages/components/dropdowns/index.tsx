import { FC, useEffect } from "react";
import Head from "next/head";

import { Button, Dropdown } from "@cube/components";
import {
  ChevronDownIcon,
  PencilAltIcon,
  DuplicateIcon,
  TrashIcon,
} from "@heroicons/react/outline";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const TextAreaPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("dropdowns");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Dropdowns - Cube - React Components Library</title>
      </Head>
      <Page title="Dropdowns">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Dropdown } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <p>
              The <Keyword>buttonRenderer</Keyword> prop is required, and you
              need to use <Keyword>Dropdown.Button</Keyword> inside it.{" "}
              <Keyword>Dropdown.Button</Keyword> is used to detect click events.
              However, you can use <Keyword>as</Keyword> property to specify the
              component that you want to use and you may pass any props to{" "}
              <Keyword>Dropdown.Button</Keyword> which eventually will be passed
              to the <Keyword>as</Keyword> component.
            </p>
            <p>
              <Keyword>Dropdown</Keyword> component must have chilren and we
              recommend to use <Keyword>Dropdown.Item</Keyword>.
            </p>
            <p>
              <Keyword>Dropdown.Item</Keyword> children can be any react node or
              a <Keyword>{`({active, selected}) => {}`}</Keyword>. function
            </p>
            <Example
              code={`<Dropdown
  buttonRenderer={({ ref }) => (
    <Dropdown.Button ref={ref} as={Button} color="primary" className="flex flex-row items-center pr-3 space-x-1">
      <span>More</span>
      <span className="flex items-center justify-center w-5 h-5">
        <ChevronDownIcon />
      </span>
    </Dropdown.Button>
  )}>

  <Dropdown.Item className="flex flex-row space-x-3">
    <span className="w-5 h-5">
      <PencilAltIcon />
    </span>
    <span>Edit</span>
  </Dropdown.Item>

  <Dropdown.Item className="flex flex-row space-x-3">
    <span className="w-5 h-5">
      <DuplicateIcon />
    </span>
    <span>Duplicate</span>
  </Dropdown.Item>

  <Dropdown.Item className="flex flex-row space-x-3" disabled>
    <span className="w-5 h-5">
      <TrashIcon />
    </span>
    <span>Trash</span>
  </Dropdown.Item>

</Dropdown>`}
            >
              <Dropdown
                buttonRenderer={({ ref }) => (
                  <Dropdown.Button
                    ref={ref}
                    as={Button}
                    color="primary"
                    className="flex flex-row items-center pr-3 space-x-1"
                  >
                    <span>More</span>
                    <span className="flex items-center justify-center w-5 h-5">
                      <ChevronDownIcon />
                    </span>
                  </Dropdown.Button>
                )}
              >
                <Dropdown.Item className="flex flex-row space-x-3">
                  <span className="w-5 h-5">
                    <PencilAltIcon />
                  </span>
                  <span>Edit</span>
                </Dropdown.Item>
                <Dropdown.Item className="flex flex-row space-x-3">
                  <span className="w-5 h-5">
                    <DuplicateIcon />
                  </span>
                  <span>Duplicate</span>
                </Dropdown.Item>
                <Dropdown.Item className="flex flex-row space-x-3" disabled>
                  <span className="w-5 h-5">
                    <TrashIcon />
                  </span>
                  <span>Trash</span>
                </Dropdown.Item>
              </Dropdown>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default TextAreaPage;
