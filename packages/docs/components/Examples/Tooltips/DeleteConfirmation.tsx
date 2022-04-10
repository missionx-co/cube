import { FC, useState } from 'react';

import { Button, Tooltip } from '@cube/components';

const DeleteConfirmation: FC = () => {
  return (
    <Tooltip
      content={(close) => (
        <div className="block space-y-5">
          <p className="text-sm text-gray-700">
            Are you sure you want to delete the blog post?
          </p>
          <div className="flex space-x-3">
            <Button
              color="error"
              area="sm"
              variant="light"
              onClick={close}
              className="w-full"
            >
              Confirm deletion
            </Button>
            <Button
              area="sm"
              color="error"
              variant="light"
              onClick={close}
              className="hover:bg-gray-100 bg-gray-50 w-full text-gray-700"
            >
              cancel
            </Button>
          </div>
        </div>
      )}
      className="p-4 text-gray-900 bg-white border border-gray-200 rounded-lg"
      showOn="click"
    >
      <Button color="error">Click to delete Blog post</Button>
    </Tooltip>
  );
};

export default DeleteConfirmation;
