import Head from 'next/head';
import { FC, useEffect } from 'react';

import { Radio } from '@cube/components';

import CodeSnippet from '@components/CodeSnippet';
import Example from '@components/Example';
import Keyword from '@components/Keyword';
import Page from '@components/Layout/Page';
import { useSidebarContext } from '@components/Layout/SidebarContext';
import Section from '@components/Section';

const RadiosPage: FC = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage('radio');
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Radio - Cube - React Components Library</title>
      </Head>
      <Page title="Radio">
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>
              {"import { Radio } from '@cube/components'"}
            </CodeSnippet>
          </Section>

          <Section title="Usage">
            <div className="space-y-3">
              <p>
                You can change the <Keyword>Radio</Keyword> size with the{' '}
                <Keyword>area</Keyword> property. It accepts one of{' '}
                <Keyword>base</Keyword>. <Keyword>sm.</Keyword>
              </p>
              <p>
                The <Keyword>Radio</Keyword> component has two variants:{' '}
                <Keyword>filled</Keyword> and <Keyword>outline</Keyword>
              </p>
              <p>
                The use of <Keyword>Radio.Group</Keyword> is mandatory and must
                wrap your gruop of radio with it.
              </p>
            </div>
            <Example
              code={`<Radio.Group name="size" orientation="horizontal">
  <Radio value="remeber-me">
    <Radio.Label>Remember me</Radio.Label>
  </Radio>

  <Radio value="remember-me-sm" area="sm">
    <Radio.Label>Remember me (small)</Radio.Label>
  </Radio>

  <Radio value="remember-me-disabled" disabled>
    <Radio.Label>Remember me (disabled)</Radio.Label>
  </Radio>
</Radio.Group>

<Radio.Group name="variant" orientation="horizontal">
  <Radio value="outline" variant="outline">
    <Radio.Label>Remember me (outline variant)</Radio.Label>
  </Radio>

  <Radio value="filled" variant="filled">
    <Radio.Label>Remember me (filled variant)</Radio.Label>
  </Radio>
</Radio.Group>`}
            >
              <div className="flex flex-col space-y-10">
                <Radio.Group name="size" orientation="horizontal">
                  <Radio value="remeber-me">
                    <Radio.Label>Remember me</Radio.Label>
                  </Radio>

                  <Radio value="remember-me-sm" area="sm">
                    <Radio.Label>Remember me (small)</Radio.Label>
                  </Radio>

                  <Radio value="remember-me-disabled" disabled>
                    <Radio.Label>Remember me (disabled)</Radio.Label>
                  </Radio>
                </Radio.Group>

                <Radio.Group name="variant" orientation="horizontal">
                  <Radio value="outline" variant="outline">
                    <Radio.Label>Remember me (outline variant)</Radio.Label>
                  </Radio>

                  <Radio value="filled" variant="filled">
                    <Radio.Label>Remember me (filled variant)</Radio.Label>
                  </Radio>
                </Radio.Group>
              </div>
            </Example>
          </Section>

          <Section title="Customization">
            <div className="space-y-3">
              <p>
                Use <Keyword>containerClassName</Keyword> to customize the{' '}
                container style.
              </p>
              <p>
                Use <Keyword>className</Keyword> to customize the{' '}
                <Keyword>Radio</Keyword> component style.
              </p>
              <p>
                Use <Keyword>icon</Keyword> to customize the selected icon.
              </p>
            </div>
            <Example
              code={`<Radio.Group name="custom" className="space-y-10">
  <Radio
    value="custom"
    className="items-center w-10 h-10 p-1"
  >
    <Radio.Label className="flex flex-col ml-4">
      <span>Remember me</span>
      <span className="font-normal text-gray-500">
        Save my login details for next time.
      </span>
    </Radio.Label>
  </Radio>

  <Radio
    value="custom-2"
    className="items-center w-10 h-10 p-1"
  >
    <Radio.Label className="flex flex-col ml-4">
      <span>Remember me</span>
      <span className="font-normal text-gray-500">
        Save my login details for next time.
      </span>
    </Radio.Label>
  </Radio>
</Radio.Group>`}
            >
              <Radio.Group name="custom" className="space-y-10">
                <Radio value="custom" className="items-center w-10 h-10 p-1">
                  <Radio.Label className="flex flex-col ml-4">
                    <span>Remember me</span>
                    <span className="font-normal text-gray-500">
                      Save my login details for next time.
                    </span>
                  </Radio.Label>
                </Radio>

                <Radio value="custom-2" className="items-center w-10 h-10 p-1">
                  <Radio.Label className="flex flex-col ml-4">
                    <span>Remember me</span>
                    <span className="font-normal text-gray-500">
                      Save my login details for next time.
                    </span>
                  </Radio.Label>
                </Radio>
              </Radio.Group>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default RadiosPage;
