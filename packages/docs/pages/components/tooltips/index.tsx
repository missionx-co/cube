import { FC, useEffect } from "react";
import Head from "next/head";

import { Button, Tooltip } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const TooltipsPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("tooltips");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Tooltip - Cube - React Components Library</title>
      </Head>
      <Page
        title="Tooltip"
        description="Tooltips display informative text when users hover over, focus on, or tap an element"
      >
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Tooltip } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <p>
              <Keyword>Tooltip</Keyword> implementation is totally based on{" "}
              <Keyword>@tippy/react</Keyword> component. Visit{" "}
              <a
                className="text-primary-500 hover:text-primary-600"
                href="https://github.com/atomiks/tippyjs-react"
                target="_blank"
              >
                their documentation
              </a>{" "}
              for more details on props and customiation
            </p>
            <Example
              code={`<Tooltip content="This is a tooltip">
  <Button>Hover for a tooltip</Button>
</Tooltip>`}
            >
              <Tooltip content="This is a tooltip">
                <Button>Hover for a tooltip</Button>
              </Tooltip>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default TooltipsPage;
