import { FC } from "react";

import CodeSnippet from "./CodeSnippet";

interface IExample {
  code: string;
}

const Example: FC<IExample> = ({ children, code }) => (
  <>
    <div className="md:flex-row md:space-y-0 md:space-x-4  flex flex-col items-start p-4 space-y-4 border border-gray-300 rounded-lg">
      {children}
    </div>
    <CodeSnippet>{code}</CodeSnippet>
  </>
);

export default Example;
