import { XIcon } from '@heroicons/react/outline';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '../../Button';
import ITitle from './ITitle';

export type TitleType = React.FC<ITitle>;

const Title: TitleType = ({ onClose, children, className, ...props }) => {
  return (
    <header
      className={twMerge(
        'flex items-center justify-center px-4 pt-4 pb-0 text-lg font-medium text-gray-900',
        className,
      )}
      {...props}
    >
      <div className="flex-1 w-full">{children}</div>
      {onClose && (
        <Button
          className="w-5 h-5"
          variant="link"
          color="error"
          onClick={onClose}
        >
          <XIcon />
        </Button>
      )}
    </header>
  );
};

export default Title;
