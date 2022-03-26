import { FC, useEffect } from "react";
import Head from "next/head";

import { Checkbox } from "@cube/components";

import Keyword from "@components/Keyword";
import Example from "@components/Example";
import Section from "@components/Section";
import Page from "@components/Layout/Page";
import CodeSnippet from "@components/CodeSnippet";

import { useSidebarContext } from "@components/Layout/SidebarContext";

const CheckboxesPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("checkboxes");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Checkbox - Cube - React Components Library</title>
      </Head>
      <Page title="Checkbox">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Checkbox } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <div className="space-y-3">
              <p>
                <Keyword>Checkbox</Keyword> component can have the protperties
                that a regular HTML checkbox/radio might have.
              </p>
              <p>
                You can change the <Keyword>Checkbox</Keyword> size with the{" "}
                <Keyword>area</Keyword> property. It accepts one of{" "}
                <Keyword>base</Keyword>. <Keyword>sm.</Keyword>
              </p>
              <p>
                The <Keyword>Checkbox</Keyword> component has two variants:{" "}
                <Keyword>filled</Keyword> and <Keyword>outline</Keyword>
              </p>
            </div>
            <Example
              code={`<Checkbox>
  <Checkbox.Label>Remember me</Checkbox.Label>
</Checkbox>

<Checkbox area="sm">
  <Checkbox.Label>Remember me (small)</Checkbox.Label>
</Checkbox>

<Checkbox isDisabled>
  <Checkbox.Label>Remember me (disabled)</Checkbox.Label>
</Checkbox>

<Checkbox variant="outline" defaultSelected>
  <Checkbox.Label>Remember me (outline variant)</Checkbox.Label>
</Checkbox>

<Checkbox variant="filled" defaultSelected>
  <Checkbox.Label>Remember me (filled variant)</Checkbox.Label>
</Checkbox>`}
            >
              <div className="flex flex-col space-y-10">
                <div className="lg:flex-row flex flex-col items-center space-x-3">
                  <Checkbox>
                    <Checkbox.Label>Remember me</Checkbox.Label>
                  </Checkbox>

                  <Checkbox area="sm">
                    <Checkbox.Label>Remember me (small)</Checkbox.Label>
                  </Checkbox>

                  <Checkbox isDisabled>
                    <Checkbox.Label>Remember me (disabled)</Checkbox.Label>
                  </Checkbox>
                </div>

                <div className="lg:flex-row flex flex-col space-x-3">
                  <Checkbox variant="outline" defaultSelected>
                    <Checkbox.Label>
                      Remember me (outline variant)
                    </Checkbox.Label>
                  </Checkbox>

                  <Checkbox variant="filled" defaultSelected>
                    <Checkbox.Label>
                      Remember me (filled variant)
                    </Checkbox.Label>
                  </Checkbox>
                </div>
              </div>
            </Example>
          </Section>

          <Section title="Customization">
            <div className="space-y-3">
              <p>
                Use <Keyword>containerClassName</Keyword> to customize the{" "}
                container style.
              </p>
              <p>
                Use <Keyword>className</Keyword> to customize the{" "}
                <Keyword>Checkbox</Keyword> component style.
              </p>
              <p>
                Use <Keyword>icon</Keyword> to customize the selected icon.
              </p>
            </div>
            <Example
              code={`<Checkbox
  containerClassName="border-2 border-gray-100 p-4 rounded-lg shadow"
  className="items-center w-10 h-10 p-1 rounded-full"
  icon={() => <span className="bg-primary-600 block w-6 h-6 rounded-full" />}
>
  <Checkbox.Label className="flex flex-col ml-4">
    <span>Remember me</span>
    <span className="font-normal text-gray-500">
      Save my login details for next time.
    </span>
  </Checkbox.Label>
</Checkbox>`}
            >
              <Checkbox
                containerClassName="border-2 border-gray-200 p-4 rounded-lg shadow"
                className="items-center w-10 h-10 p-1 rounded-full"
                icon={() => (
                  <span className="bg-primary-600 block w-6 h-6 rounded-full shadow-lg" />
                )}
              >
                <Checkbox.Label className="flex flex-col ml-4">
                  <span>Remember me</span>
                  <span className="font-normal text-gray-500">
                    Save my login details for next time.
                  </span>
                </Checkbox.Label>
              </Checkbox>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default CheckboxesPage;
