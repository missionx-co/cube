import { FC, Fragment, useState } from 'react';

import { Button, Modal } from '@cube/components';

import Example from '@components/Example';

const BasicUsage: FC = ({}) => {
  const [open, toggleOpen] = useState(false);

  return (
    <Example>
      <Button onClick={() => toggleOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => toggleOpen(false)}>
        <Modal.Dialog>Content here</Modal.Dialog>
      </Modal>
    </Example>
  );
};

export default BasicUsage;
