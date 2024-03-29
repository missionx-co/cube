import { Button, Modal } from '@cube-ui/components';
import { FC, Fragment, useState } from 'react';

import Example from '@components/Example';

const BasicUsage: FC = ({}) => {
  const [open, toggleOpen] = useState(false);

  return (
    <Example>
      <Button onClick={() => toggleOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => toggleOpen(false)}>
        <Modal.Overlay />
        <Modal.Dialog>Content here</Modal.Dialog>
      </Modal>
    </Example>
  );
};

export default BasicUsage;
