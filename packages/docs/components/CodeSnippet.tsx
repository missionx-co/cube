import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ICodeSnippet {}

const CodeSnippet: FC<ICodeSnippet> = ({ children }) => (
  <SyntaxHighlighter
    language="jsx"
    className="p-6 font-mono rounded-lg"
    style={dark}
  >
    {children}
  </SyntaxHighlighter>
);

export default CodeSnippet;
