import { Button } from '@cube-ui/components';
import { FC } from 'react';

import Example from '@components/Example';

interface IVariantExamples {}

const VariantExamples: FC<IVariantExamples> = () => (
  <Example>
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-4">
        <Button variant="fill">Primary</Button>
        <Button variant="fill" color="error">
          Error
        </Button>
        <Button variant="fill" color="success">
          Success
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="light">Primary</Button>
        <Button variant="light" color="error">
          Error
        </Button>
        <Button variant="light" color="success">
          Success
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="outline">Primary</Button>
        <Button variant="outline" color="error">
          Error
        </Button>
        <Button variant="outline" color="success">
          Success
        </Button>
      </div>
      <div className="flex flex-row space-x-4">
        <Button variant="link">Primary</Button>
        <Button variant="link" color="error">
          Error
        </Button>
        <Button variant="link" color="success">
          Success
        </Button>
      </div>
    </div>
  </Example>
);

export default VariantExamples;
