import { FC, ReactNode } from "react";

import Keyword from "./Keyword";

interface ISection {
  title: ReactNode;
  description?: ReactNode;
}

const Section: FC<ISection> = ({ title, description, children }) => (
  <article className="space-y-4 md:space-y-8">
    <header className="space-y-2">
      <h2 className="font-semibold text-gray-900 text-display-sm">{title}</h2>
      {Boolean(description) && <p>{description}</p>}
    </header>
    {children}
  </article>
);

export default Section;
