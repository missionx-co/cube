import { FC, useEffect } from "react";
import Head from "next/head";

import { Badge } from "@cube/components";

import Page from "@components/Layout/Page";
import Section from "@components/Section";
import Keyword from "@components/Keyword";
import CodeSnippet from "@components/CodeSnippet";
import Example from "@components/Example";
import { useSidebarContext } from "@components/Layout/SidebarContext";

interface IBadges {}

const Badges: FC<IBadges> = () => {
  const { setActivePage } = useSidebarContext();

  useEffect(() => {
    setActivePage("badges");
    /* eslint-disable */
  }, []);

  return (
    <>
      <Head>
        <title>Badges - Cube - React Components Library</title>
      </Head>
      <Page
        title="Badges"
        description="Badges help highlight important information, such as notifications or new and unread messages. They’re primarily used for communicating secondary or additional information to text."
      >
        <div className="space-y-16">
          <Section title="Import">
            <CodeSnippet>{`import { Badge } from '@cube/components'`}</CodeSnippet>
          </Section>

          <Section
            title="Size"
            description={
              <>
                Use the <Keyword>area</Keyword> property to define Badge size.
              </>
            }
          >
            <Example
              code={`<Badge area="sm">Label</Badge>
<Badge>Label</Badge>
<Badge area="lg">Label</Badge>`}
            >
              <Badge area="sm">Label</Badge>
              <Badge>Label</Badge>
              <Badge area="lg">Label</Badge>
            </Example>
          </Section>

          <Section
            title="Colors"
            description={
              <>
                Use the <Keyword>color</Keyword> property to define Badge color.
              </>
            }
          >
            <Example
              code={`<Badge area="lg">Label</Badge>
<Badge color="primary" area="lg">
  Label
</Badge>
<Badge color="error" area="lg">
  Label
</Badge>
<Badge color="warning" area="lg">
  Label
</Badge>
<Badge color="success" area="lg">
  Label
</Badge>
<Badge color="blue-gray" area="lg">
  Label
</Badge>
<Badge color="blue-light" area="lg">
  Label
</Badge>
<Badge color="blue" area="lg">
  Label
</Badge>
<Badge color="indigo" area="lg">
  Label
</Badge>
<Badge color="purple" area="lg">
  Label
</Badge>
<Badge color="pink" area="lg">
  Label
</Badge>
<Badge color="rose" area="lg">
  Label
</Badge>
<Badge color="orange" area="lg">
  Label
</Badge>`}
            >
              <Badge area="lg">Label</Badge>
              <Badge color="primary" area="lg">
                Label
              </Badge>
              <Badge color="error" area="lg">
                Label
              </Badge>
              <Badge color="warning" area="lg">
                Label
              </Badge>
              <Badge color="success" area="lg">
                Label
              </Badge>
              <Badge color="blue-gray" area="lg">
                Label
              </Badge>
              <Badge color="blue-light" area="lg">
                Label
              </Badge>
              <Badge color="blue" area="lg">
                Label
              </Badge>
              <Badge color="indigo" area="lg">
                Label
              </Badge>
              <Badge color="purple" area="lg">
                Label
              </Badge>
              <Badge color="pink" area="lg">
                Label
              </Badge>
              <Badge color="rose" area="lg">
                Label
              </Badge>
              <Badge color="orange" area="lg">
                Label
              </Badge>
            </Example>
          </Section>

          <Section
            title="Customization"
            description={
              <>
                use <Keyword>className</Keyword> property to pass Tailwind CSS
                classes to customize the badge however you want.
              </>
            }
          >
            <Example
              code={`//with dot / gray color
<Badge className="flex items-center space-x-1.5" area="lg">
  <span className="w-2 h-2 bg-gray-500 rounded-full" />
  <span>With dot</span>
</Badge>

//with icon on the left / gray color
<Badge className="flex items-center space-x-1.5" area="lg">
  <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
  <span>With icon</span>
</Badge>

//with icon on the right / gray color
<Badge className="flex items-center space-x-1.5" area="lg">
  <span>With icon</span>
  <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
</Badge>

//badge group / gray color
<Badge className="flex items-center space-x-1.5 pl-1" area="lg">
  <Badge className="text-white bg-gray-700">New feature</Badge>
  <span>Badge group example with inner badge and icon</span>
  <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
</Badge>

//with dot / primary color
<Badge className="flex items-center space-x-1.5" color="primary" area="lg">
  <span className="w-2 h-2 rounded-full bg-primary-500" />
  <span>With dot</span>
</Badge>

//with icon on the left / primary color
<Badge className="flex items-center space-x-1.5" color="primary" area="lg">
  <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
  <span>With icon</span>
</Badge>

//with icon on the right / primary color
<Badge className="flex items-center space-x-1.5" color="primary" area="lg">
  <span>With icon</span>
  <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
</Badge>

//badge group / primary color
<Badge className="flex items-center space-x-1.5 pl-1" color="primary" area="lg">
  <Badge className="text-white bg-primary-700">
    New feature
  </Badge>
  <span>Badge group example with inner badge and icon</span>
  <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
</Badge>`}
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge className="flex items-center space-x-1.5" area="lg">
                    <span className="w-2 h-2 bg-gray-500 rounded-full" />
                    <span>With dot</span>
                  </Badge>
                  <Badge className="flex items-center space-x-1.5" area="lg">
                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                    <span>With icon</span>
                  </Badge>
                  <Badge className="flex items-center space-x-1.5" area="lg">
                    <span>With icon</span>
                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                  </Badge>
                  <Badge
                    className="flex items-center space-x-1.5 pl-1"
                    area="lg"
                  >
                    <Badge className="text-white bg-gray-700">
                      New feature
                    </Badge>
                    <span>Badge group example with inner badge and icon</span>
                    <span className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge
                    color="primary"
                    className="flex items-center space-x-1.5"
                    area="lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    <span>With dot</span>
                  </Badge>
                  <Badge
                    color="primary"
                    className="flex items-center space-x-1.5"
                    area="lg"
                  >
                    <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
                    <span>With icon</span>
                  </Badge>
                  <Badge
                    color="primary"
                    className="flex items-center space-x-1.5"
                    area="lg"
                  >
                    <span>With icon</span>
                    <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
                  </Badge>
                  <Badge
                    color="primary"
                    className="flex items-center space-x-1.5 pl-1"
                    area="lg"
                  >
                    <Badge className="text-white bg-primary-700">
                      New feature
                    </Badge>
                    <span>Badge group example with inner badge and icon</span>
                    <span className="w-5 h-5 border-2 rounded-full border-primary-500" />
                  </Badge>
                </div>
              </div>
            </Example>
          </Section>
        </div>
      </Page>
    </>
  );
};

export default Badges;
