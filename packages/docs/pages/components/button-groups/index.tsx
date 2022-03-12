import { FC, useEffect } from "react";
import Head from "next/head";

import { Button } from "@cube/components";

import Page from "@components/Layout/Page";
import Section from "@components/Section";
import Keyword from "@components/Keyword";
import Example from "@components/Example";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

interface IButtonGroups {}

const ButtonGroups: FC<IButtonGroups> = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("button-groups");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Button Groups - Cube - React Components Library</title>
      </Head>
      <Page
        title="Button Groups"
        description="Button groups combine sets of buttons into toolbars or split buttons for more complex components. Button groups are also useful for acting as mini “tabs” in UI, for example, switching between date ranges."
      >
        <div className="space-y-16">
          <Section
            title="Import"
            description={
              <>
                <Keyword>Button.Group</Keyword> is imported by default with the{" "}
                <Keyword>Button</Keyword> component.
              </>
            }
          >
            <CodeSnippet>{`import { Button } from '@cube/components'`}</CodeSnippet>
          </Section>
          <Section title="Usage">
            <Example
              code={`
//three buttons
<Button.Group>
  <Button variant="outline">Leading</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Trailing</Button>
</Button.Group>

//multiple buttons
<Button.Group>
  <Button variant="outline">Leading</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Trailing</Button>
</Button.Group>

//with an icon and customization
<Button.Group>
  <Button className="p-2.5">
    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
  </Button>
  <Button className="p-2.5">
    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
  </Button>
  <Button className="p-2.5">
    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
  </Button>
</Button.Group>`}
            >
              <div className="space-y-4">
                <Button.Group>
                  <Button variant="outline">Leading</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Trailing</Button>
                </Button.Group>
                <Button.Group>
                  <Button variant="outline">Leading</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Middle</Button>
                  <Button variant="outline">Trailing</Button>
                </Button.Group>
                <Button.Group>
                  <Button variant="outline" className="p-2.5">
                    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
                  </Button>
                  <Button variant="outline" className="p-2.5">
                    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
                  </Button>
                  <Button variant="outline" className="p-2.5">
                    <span className="flex w-5 h-5 border rounded-full border-primary-500" />
                  </Button>
                </Button.Group>
              </div>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default ButtonGroups;
