import { FC } from 'react';

import CodeSnippet from './CodeSnippet';

interface IExample {
  code: string;
}

const Example: FC<IExample> = ({ children, code }) => (
  <>
    <div className="not-prose flex flex-wrap gap-4 p-4 border border-gray-300 rounded-lg">
      {children}
    </div>
    <CodeSnippet>{code}</CodeSnippet>
  </>
);

export default Example;
