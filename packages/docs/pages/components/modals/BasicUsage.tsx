import React, { useState } from "react";
import { Button, Modal, Badge } from "@cube/components";

import Example from "@components/Example";

const BasicUsage: React.FC = () => {
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
  <Modal.Dialog className="max-w-xl">
    <Modal.Title className="text-xl text-gray-900">
      Blog released
    </Modal.Title>

    <div className="p-3 space-y-5">
      <Badge
        className="flex items-center space-x-1.5 pl-1 max-w-xl"
        area="lg"
        color="success"
      >
        <Badge className="bg-success-700 text-white" color="success">
          New feature
        </Badge>
        <span>
          We just released this new feature, make sure to check it out
        </span>
      </Badge>
      <p className="text-sm text-gray-500">
        Blog is released. This blog post has been published. Team members
        will be able to edit this post and republish changes.
      </p>
    </div>

    <Modal.Footer className="flex flex-row space-x-3">
      <Button
        className="w-full"
        variant="outline"
        color="error"
        onClick={handleCloseModal}
      >
        Dismiss
      </Button>
      <Button className="w-full">Check it out</Button>
    </Modal.Footer>
  </Modal.Dialog>
</Modal>`}
    >
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal open={open} onClose={handleCloseModal}>
        <Modal.Dialog className="max-w-xl">
          <Modal.Title className="text-xl text-gray-900">
            Blog released
          </Modal.Title>
          <div className="p-3 space-y-5">
            <Badge
              className="flex items-center space-x-1.5 pl-1 max-w-xl"
              area="lg"
              color="success"
            >
              <Badge className="bg-success-700 text-white" color="success">
                New feature
              </Badge>
              <span>
                We just released this new feature, make sure to check it out
              </span>
            </Badge>
            <p className="text-sm text-gray-500">
              Blog is released. This blog post has been published. Team members
              will be able to edit this post and republish changes.
            </p>
          </div>
          <Modal.Footer className="flex flex-row space-x-3">
            <Button
              className="w-full"
              variant="outline"
              color="error"
              onClick={handleCloseModal}
            >
              Dismiss
            </Button>
            <Button className="w-full">Check it out</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </Example>
  );
};

export default BasicUsage;
