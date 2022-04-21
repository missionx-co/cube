import { Button, DatePicker } from '@cube-ui/components';
import { FC, useRef } from 'react';

import Example from '@components/Example';

const MethodsExample: FC = () => {
  const ref = useRef<any>(null);

  function handleOpenDatePicker() {
    ref.current?.open(true);
  }

  function handleClearDatePicker() {
    ref.current?.setValue(null);
  }

  function handleSelectToday() {
    ref.current?.setValue(new Date());
  }

  return (
    <Example>
      <div className="flex flex-col space-y-5">
        <Button.Group>
          <Button onClick={handleOpenDatePicker} variant="outline">
            Open Date picker
          </Button>
          <Button onClick={handleSelectToday} variant="outline">
            Today
          </Button>
          <Button onClick={handleClearDatePicker} variant="outline">
            Clear Date picker value
          </Button>
        </Button.Group>

        <DatePicker ref={ref} />
      </div>
    </Example>
  );
};

export default MethodsExample;
