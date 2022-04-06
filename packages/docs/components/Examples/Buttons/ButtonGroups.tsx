import { FC } from 'react';

import { Button } from '@cube/components';

import Example from '@components/Example';

function ButtonGroups() {
  return (
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
    <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
  </Button>
  <Button className="p-2.5">
    <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
  </Button>
  <Button className="p-2.5">
    <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
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
            <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
          </Button>
          <Button variant="outline" className="p-2.5">
            <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
          </Button>
          <Button variant="outline" className="p-2.5">
            <span className="border-primary-500 flex w-5 h-5 border rounded-full" />
          </Button>
        </Button.Group>
      </div>
    </Example>
  );
}

export default ButtonGroups;
