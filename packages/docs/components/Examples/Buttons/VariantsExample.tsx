import { FC } from 'react';

import { Button } from '@cube/components';

import Example from '@components/Example';

interface IVariantExamples {}

const VariantExamples: FC<IVariantExamples> = () => (
  <Example
    code={`//fill buttons
<Button variant="fill">Primary</Button>
<Button variant="fill" color="error">
  Error
</Button>

//light buttons
<Button variant="light">Primary</Button>
<Button variant="light" color="error">
  Error
</Button>

//outline buttons
<Button variant="outline">Primary</Button>
<Button variant="outline" color="error">
  Error
</Button>

//link buttons
<Button variant="link">Primary</Button>
<Button variant="link" color="error">
  Error
</Button>`}
  >
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-4">
        <Button variant="fill">Primary</Button>
        <Button variant="fill" color="error">
          Error
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="light">Primary</Button>
        <Button variant="light" color="error">
          Error
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="outline">Primary</Button>
        <Button variant="outline" color="error">
          Error
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="link">Primary</Button>
        <Button variant="link" color="error">
          Error
        </Button>
      </div>
    </div>
  </Example>
);

export default VariantExamples;
