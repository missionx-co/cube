import { Button } from '@cube-ui/components';

import Example from '@components/Example';

function ButtonGroups() {
  return (
    <Example>
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
