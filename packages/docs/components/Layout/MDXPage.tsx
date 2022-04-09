import { FC, ReactNode, useEffect } from 'react';

import Page from './Page';
import { useSidebarContext } from './SidebarContext';

interface IPage {
  title?: string;
  page?: string;
  description?: ReactNode;
}

const MDXPage: FC<IPage> = ({ title, page, description, children }) => {
  const { setActivePage } = useSidebarContext();
  useEffect(() => {
    if (!page) {
      return;
    }

    setActivePage(page);

    /* eslint-disable */
  }, [page]);

  return (
    <Page title={title} description={description}>
      <article className="lg:prose-lg max-w-none prose">{children}</article>
    </Page>
  );
};

export default MDXPage;
