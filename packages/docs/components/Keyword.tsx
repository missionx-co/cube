import { FC } from "react";

interface IKeyword {}

const Keyword: FC<IKeyword> = ({ children }) => (
  <span className="font-semibold text-gray-900">`{children}`</span>
);

export default Keyword;
