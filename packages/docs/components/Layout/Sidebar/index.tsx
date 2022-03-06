import { FC } from "react";
import Link from "next/link";
import UntitledUILogo from "@components/logo";
import SearchIcon from "@icons/search";

import { bookmarks, docs } from "./nav";

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => (
  <aside className="fixed top-0 left-0 flex flex-col h-screen px-6 pt-8 space-y-6 text-white w-72">
    <header className="flex flex-col px-2 space-y-6">
      <span className="w-36 h-9">
        <UntitledUILogo />
      </span>
      <button className="h-11 w-full bg-gray-700 rounded-lg py-2.5 px-3 space-x-2 flex items-center">
        <span className="flex w-5 h-5 fill-current">
          <SearchIcon />
        </span>
        <span>Search</span>
      </button>
    </header>
    <div className="w-full h-full space-y-12 overflow-x-hidden overflow-y-scroll bg">
      <nav className="space-y-2">
        {bookmarks.map((nav) => (
          <Link key={nav.id} href={nav.href}>
            <a className="flex h-10 px-3 py-2.5 rounded-md hover:bg-gray-700 bg-gray-900 transition-colors duration-300 space-x-3 items-center font-medium">
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
                    className="flex items-center h-8 pl-6 -ml-px text-gray-400 border-l border-gray-600 hover:border-white hover:text-white"
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

export default Sidebar;
