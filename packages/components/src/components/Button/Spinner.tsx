import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ISpinner {
  className?: string;
}

const Spinner: FC<ISpinner> = ({ className, ...props }) => (
  <svg
    className={twMerge('animate-spin w-5 h-5 text-white', className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      className="opacity-25"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default Spinner;
