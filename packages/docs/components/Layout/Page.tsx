import { FC, ReactNode } from "react";

interface IPage {
  title?: string;
  description?: ReactNode;
}

const Page: FC<IPage> = ({ title, description, children }) => (
  <div className="container px-20 py-16 mx-auto">
    <header className="mb-24">
      <h1 className="mb-5 font-semibold text-gray-900 text-display-xl">
        {title}
      </h1>
      {description && <p className="text-xl text-gray-500">{description}</p>}
    </header>

    {children}
  </div>
);

export default Page;
