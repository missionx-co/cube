import { FC, useEffect } from "react";
import Head from "next/head";

import Keyword from "@components/Keyword";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

import BasicUsage from "./BasicUsage";
import Drawer from "./Drawer";

const TextAreaPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("modals");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Modals - Cube - React Components Library</title>
      </Head>
      <Page title="Modals">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Modal } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <p>
              The <Keyword>Modal</Keyword> component is basically a group of
              other components. like <Keyword>Modal.Dialog</Keyword>,{" "}
              <Keyword>Modal.Title</Keyword> ...etc.
            </p>
            <p>
              {" "}
              It's mandatory to use <Keyword>Modal.Dialog</Keyword> to acheive
              accessibility features. but it's optional to use other components
              like <Keyword>Modal.Title</Keyword> and{" "}
              <Keyword>Modal.Footer</Keyword>
            </p>
            <BasicUsage />
          </Section>

          <Section title="Customization">
            <div className="space-y-3">
              <p>
                The above example shows how to customize the modal title,
                content and footer to build the design you want.
              </p>
              <p>
                Modal Transition can be changed for{" "}
                <Keyword>Modal.Dialog</Keyword> components.
              </p>
              <p>
                The component have a property called{" "}
                <Keyword>transition</Keyword> that can have the shape of
              </p>
              <CodeSnippet>
                {`interface ITransition {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
}`}
              </CodeSnippet>
              <p>
                For more details on how to use, please refer to
                <a
                  className="text-primary-500 hover:text-primary-600"
                  href="https://headlessui.dev/react/transition"
                  target="_blank"
                >
                  {""} Tailwind Headless UI Transition component
                </a>
                .
              </p>
              <p>
                The <Keyword>Modal.Dialog</Keyword> has the following transition
                as the default transition
              </p>
              <CodeSnippet>{`transition: {
  enter: 'ease-out duration-300',
  enterFrom: 'opacity-0 scale-95',
  enterTo: 'opacity-100 scale-100',
  leave: 'ease-in duration-200',
  leaveFrom: 'opacity-100 scale-100',
  leaveTo: 'opacity-0 scale-95',
}`}</CodeSnippet>
              <p>
                Combining <Keyword>Modal</Keyword> different components with the{" "}
                <Keyword>transition</Keyword> property for the{" "}
                <Keyword>Modal.Dialog</Keyword> we can easily build a drawer.
              </p>
            </div>
            <Drawer />
          </Section>
        </div>
      </Page>
    </>
  );
};

export default TextAreaPage;
