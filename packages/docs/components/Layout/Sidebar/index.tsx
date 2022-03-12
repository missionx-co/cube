import { FC } from "react";
import clsx from "classnames";
import Link from "next/link";
import Logo from "@components/logo";

import { bookmarks, docs } from "./nav";
import { useSidebarContext } from "../SidebarContext";

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  const { activePage } = useSidebarContext();

  return (
    <aside className="fixed top-0 left-0 flex flex-col h-screen px-6 pt-8 space-y-6 text-gray-900 w-72">
      <header className="flex items-center space-x-3">
        <span className="fill-current w-14 h-14">
          <Logo />
        </span>
        <span className="font-medium text-transparent text-display-sm bg-clip-text bg-gradient-to-r from-primary-900 to-primary-700">
          Cube
        </span>
      </header>
      <div className="w-full h-full space-y-12 overflow-x-hidden overflow-y-scroll bg">
        <nav className="space-y-2">
          {bookmarks.map((nav) => (
            <Link key={nav.id} href={nav.href}>
              <a
                className={clsx(
                  "flex h-10 px-3 py-2.5 rounded-md hover:bg-gray-300 transition-colors duration-300 space-x-3 items-center font-medium",
                  {
                    "bg-gray-300": activePage === nav.id,
                    "bg-gray-200": activePage !== nav.id,
                  }
                )}
              >
                <span className="flex w-6 h-6 fill-none">{nav.icon}</span>
                <span>{nav.text}</span>
              </a>
            </Link>
          ))}
        </nav>
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
                        "flex items-center h-8 pl-6 -ml-px  border-l hover:border-gray-900 hover:text-gray-900",
                        {
                          "border-gray-900 text-gray-900":
                            link.id === activePage,
                          "text-gray-400 border-gray-300":
                            link.id !== activePage,
                        }
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
};

export default Sidebar;
