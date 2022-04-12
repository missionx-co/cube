import { FC } from 'react';

import CodeSnippet from './CodeSnippet';

interface IExample {}

const Example: FC<IExample> = ({ children }) => (
  <>
    <div className="not-prose text-md flex flex-wrap gap-4 p-4 border border-gray-300 rounded-lg">
      {children}
    </div>
  </>
);

export default Example;
