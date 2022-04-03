import { FC, ReactNode } from 'react';

import Page from './Page';

interface IPage {
  title?: string;
  description?: ReactNode;
}

const MDXPage: FC<IPage> = ({ title, description, children }) => (
  <Page title={title} description={description}>
    <article className="lg:prose-lg max-w-none prose">{children}</article>
  </Page>
);

export default MDXPage;
