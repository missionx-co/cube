import { FC, ReactNode } from "react";

interface ISection {
  title: ReactNode;
  description?: ReactNode;
}

interface ITitle {
  size?: string;
}

const Title: FC<ITitle> = ({ size, children }) => (
  <h2 className={`${size} font-semibold text-gray-900`}>{children}</h2>
);

Title.defaultProps = {
  size: "text-display-sm",
};

const Section: FC<ISection> & { Title: FC<ITitle> } = ({
  title,
  description,
  children,
}) => (
  <article className="md:space-y-8 space-y-4">
    <header className="space-y-2">
      <Title>{title}</Title>
      {Boolean(description) && <p>{description}</p>}
    </header>
    {children}
  </article>
);

Section.Title = Title;

export default Section;
