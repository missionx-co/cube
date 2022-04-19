import { FC, RefObject, useEffect, useRef, useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import { SidebarContext } from './SidebarContext';

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

const Layout: FC = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [show, setShow] = useState(false);
  const sidebar = useRef<HTMLElement>(null);

  const handleToggleSidebar = () => {
    if (sidebar.current?.classList.contains('open')) {
      sidebar.current?.classList.add('-translate-x-full');
      sidebar.current?.classList.remove('translate-x-0', 'open');
      setShow(false);
      return;
    }

    sidebar.current?.classList.remove('-translate-x-full');
    sidebar.current?.classList.add('translate-x-0', 'open');
    setTimeout(() => setShow(true), 150);
  };

  useClickOutside(sidebar, () => {
    if (!show) {
      return;
    }
    handleToggleSidebar();
  });

  useEffect(() => {
    if (!sidebar || !sidebar.current) {
      return;
    }

    const links = sidebar.current?.querySelectorAll('a');
    links.forEach((link) =>
      link.addEventListener('click', handleToggleSidebar),
    );

    return () =>
      links.forEach((link) =>
        link.removeEventListener('click', handleToggleSidebar),
      );
  }, [sidebar]);

  return (
    <SidebarContext.Provider value={{ activePage, setActivePage }}>
      <div className="lg:pl-72 lg:pt-3 relative">
        <Sidebar ref={sidebar} />
        <main className="lg:rounded-tl-3xl w-full h-full min-h-screen bg-white">
          <Header onMenuClicked={handleToggleSidebar} />
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;
