import { FC } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-dark.css";

interface ICodeSnippet {}

const CodeSnippet: FC<ICodeSnippet> = ({ children }) => (
  <Highlight className="p-6 font-mono rounded-lg language-javascript">
    {children}
  </Highlight>
);

export default CodeSnippet;
