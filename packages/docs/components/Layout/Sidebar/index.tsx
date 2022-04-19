import { CollectionIcon as AdminPanelIcon } from '@heroicons/react/outline';
import clsx from 'classnames';
import Link from 'next/link';
import { forwardRef } from 'react';

import Logo from '@components/logo';

import { useSidebarContext } from '../SidebarContext';
import { docs } from './nav';

const Sidebar: any = forwardRef<HTMLElement, unknown>((props, ref) => {
  const { activePage } = useSidebarContext();

  return (
    <aside
      ref={ref}
      className="w-72 lg:flex lg:translate-x-0 fixed top-0 left-0 z-10 flex-col h-screen px-6 pt-8 space-y-6 text-gray-900 transition duration-300 ease-in-out transform -translate-x-full bg-gray-100"
    >
      <header className="flex items-center space-x-3">
        <span className="w-14 h-14 fill-current">
          <Logo />
        </span>
        <span className="text-display-sm bg-clip-text bg-gradient-to-r from-primary-900 to-primary-700 font-medium text-transparent">
          Cube
        </span>
      </header>
      <nav className="space-y-2">
        <Link href="/admin-panel">
          <a
            className={clsx(
              'flex px-3 py-2.5 rounded-md transition-colors duration-300 space-x-3 items-start font-medium text-primary-500 hover:text-primary-600',
            )}
          >
            <span className="fill-none flex w-6 h-6">
              <AdminPanelIcon />
            </span>
            <span className="flex flex-col">
              <span>Admin Panel</span>
              <span className="text-sm font-normal text-gray-500">
                Supercharge your next project with a powerful and beautiful
                admin panel.
              </span>
            </span>
          </a>
        </Link>
      </nav>
      <div className="bg w-full h-full pb-12 space-y-12 overflow-x-hidden overflow-y-scroll">
        <nav className="space-y-4">
          <ul className="px-3 space-y-12">
            {docs.map((section) => (
              <li key={section.id}>
                <h5 className="mb-3 font-semibold">{section.text}</h5>
                <ul>
                  {section.children.map((link) => (
                    <li
                      key={link.id}
                      className={clsx(
                        'flex items-center h-8 pl-6 -ml-px  border-l hover:border-gray-900 hover:text-gray-900',
                        {
                          'border-gray-900 text-gray-900':
                            link.id === activePage,
                          'text-gray-400 border-gray-300':
                            link.id !== activePage,
                        },
                      )}
                    >
                      <Link href={link.href}>
                        <a className="w-full">{link.text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
