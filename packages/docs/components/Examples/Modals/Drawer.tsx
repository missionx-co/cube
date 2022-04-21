import { Button, Modal } from '@cube-ui/components';
import React, { useState } from 'react';

import Example from '@components/Example';

const Drawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <Example>
      <Button onClick={handleOpenModal}>Open Drawer</Button>
      <Modal open={open} onClose={handleCloseModal}>
        <Modal.Overlay />
        <Modal.Dialog
          transition={{
            duration: 300,
            enter: 'translate-x-0',
            exit: 'translate-x-full',
          }}
          className="w-80 fixed top-0 right-0 left-auto h-screen duration-300 translate-x-0 translate-y-0 rounded-none"
        >
          <Modal.Title onClose={handleCloseModal}>Notifications</Modal.Title>
          <div className="max-h-full p-3 space-y-6">
            <p className="text-center text-gray-400">
              You{"'"}re all set. There{"'"}s no new notifications for you.
            </p>
          </div>
        </Modal.Dialog>
      </Modal>
    </Example>
  );
};

export default Drawer;
