import React, { useState } from "react";
import { Button, Modal, Badge } from "@cube/components";

import Example from "@components/Example";

const Drawer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <Example
      code={`const [open, setOpen] = useState(false);
const handleOpenModal = () => setOpen(true);
const handleCloseModal = () => setOpen(false);

<Button onClick={handleOpenModal}>Open Modal</Button>
<Modal open={open} onClose={handleCloseModal}>
  <Modal.Dialog
    transition={{
      enter: "ease-out duration-300",
      enterFrom: "translate-x-full",
      enterTo: "translate-x-0",
      leave: "ease-in duration-200",
      leaveFrom: "translate-x-0",
      leaveTo: "translate-x-full",
    }}
    className="w-80 fixed top-0 right-0 left-auto h-full translate-x-full rounded-none"
    {/* dialog has -translate-x-1/2 tailwind class by default and this property would prevent any conflict between the default styling and the transition styling */}
    style={{ transform: "translateX(0)" }} 
  >
    <Modal.Title onClose={handleCloseModal}>Notifications</Modal.Title>
    <div className="max-h-full p-3 space-y-6">
      <p className="text-center text-gray-400">
        You're all set. There's no new notifications for you.
      </p>
    </div>
  </Modal.Dialog>
</Modal>`}
    >
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal open={open} onClose={handleCloseModal}>
        <Modal.Dialog
          transition={{
            enter: "ease-out duration-300",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "ease-in duration-200",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full",
          }}
          className="w-80 fixed top-0 right-0 left-auto h-full translate-x-full rounded-none"
          style={{ transform: "translateX(0)" }}
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
