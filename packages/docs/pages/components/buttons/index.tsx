import { FC } from "react";

import { Button } from "@untitled-ui/components";

import Page from "@components/Layout/Page";
import Section from "@components/Section";
import Keyword from "@components/Keyword";
import CodeSnippet from "@components/CodeSnippet";
import Example from "@components/Example";

interface IButtons {}

const Buttons: FC<IButtons> = () => (
  <Page
    title="Buttons"
    description="Buttons communicate actions that users can take."
  >
    <div className="space-y-16">
      <Section
        title="Size"
        description={
          <>
            Use the <Keyword>area</Keyword> property to define button size.
          </>
        }
      >
        <Example
          code={`<Button area="sm">Button CTA</Button>
<Button>Button CTA</Button>
<Button area="lg">Button CTA</Button>
<Button area="xl">Button CTA</Button>
<Button area="2xl">Button CTA</Button>`}
        >
          <Button area="sm">Button CTA</Button>
          <Button>Button CTA</Button>
          <Button area="lg">Button CTA</Button>
          <Button area="xl">Button CTA</Button>
          <Button area="2xl">Button CTA</Button>
        </Example>
      </Section>

      <Section
        title="Colors"
        description={
          <>
            Use the <Keyword>color</Keyword> property to define button color.
          </>
        }
      >
        <Example
          code={`<Button>Button CTA</Button>
<Button color="error">Button CTA</Button>`}
        >
          <Button>Button CTA</Button>
          <Button color="error">Button CTA</Button>
        </Example>
      </Section>

      <Section
        title="Variants"
        description={
          <>
            {" "}
            Use the <Keyword>variant</Keyword> property to define button
            variant.
          </>
        }
      >
        <Example
          code={`<div className="flex flex-col space-y-4">
  <div className="space-x-4">
    <Button>Button CTA</Button>
    <Button variant="light">Button CTA</Button>
    <Button variant="outline">Button CTA</Button>
    <Button variant="link">Button CTA</Button>
  </div>
  <div className="space-x-4">
    <Button color="error">Button CTA</Button>
    <Button color="error" variant="light">
      Button CTA
    </Button>
    <Button color="error" variant="outline">
      Button CTA
    </Button>
    <Button color="error" variant="link">
      Button CTA
    </Button>
  </div>
</div>`}
        >
          <div className="flex flex-col space-y-4">
            <div className="space-x-4">
              <Button>Button CTA</Button>
              <Button variant="light">Button CTA</Button>
              <Button variant="outline">Button CTA</Button>
              <Button variant="link">Button CTA</Button>
            </div>
            <div className="space-x-4">
              <Button color="error">Button CTA</Button>
              <Button color="error" variant="light">
                Button CTA
              </Button>
              <Button color="error" variant="outline">
                Button CTA
              </Button>
              <Button color="error" variant="link">
                Button CTA
              </Button>
            </div>
          </div>
        </Example>
      </Section>

      <Section
        title="Button Customization"
        description={
          <>
            use <Keyword>className</Keyword> property to pass tailwind css
            classes to customize the button however you want.
          </>
        }
      >
        <Example
          code={`
// customize color
<Button className="bg-success-400 hover:bg-success-500 focus:ring-success-100">
  Button CTA
</Button>

// add icon to the left
<Button className="flex items-center space-x-2">
  <span className="w-5 h-5 border-2 border-white rounded-full" />
  <span>Button CTA</span>
</Button>

// add icon to the right
<Button className="flex items-center space-x-2">
  <span>Button CTA</span>
  <span className="w-5 h-5 border-2 border-white rounded-full" />
</Button>

// icon only
<Button className="p-2.5">
  <span className="block w-5 h-5 border-2 border-white rounded-full" />
</Button>`}
        >
          <Button className="bg-success-400 hover:bg-success-500 focus:ring-success-100">
            Button CTA
          </Button>
          <Button className="flex items-center space-x-2">
            <span className="w-5 h-5 border-2 border-white rounded-full" />
            <span>Button CTA</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <span>Button CTA</span>
            <span className="w-5 h-5 border-2 border-white rounded-full" />
          </Button>
          <Button className="p-2.5">
            <span className="block w-5 h-5 border-2 border-white rounded-full" />
          </Button>
        </Example>
      </Section>
    </div>
  </Page>
);

export default Buttons;
