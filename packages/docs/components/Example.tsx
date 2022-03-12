import { FC } from "react";

import CodeSnippet from "./CodeSnippet";

interface IExample {
  code: string;
}

const Example: FC<IExample> = ({ children, code }) => (
  <>
    <div className="flex items-start p-4 space-x-4 border border-gray-300 rounded-lg">
      {children}
    </div>
    <CodeSnippet>{code}</CodeSnippet>
  </>
);

export default Example;
