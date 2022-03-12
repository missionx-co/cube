import { FC, useState, createContext } from "react";
import { SidebarContext } from "./SidebarContext";
import Sidebar from "./Sidebar";

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => {
  const [activePage, setActivePage] = useState("home");

  return (
    <SidebarContext.Provider value={{ activePage, setActivePage }}>
      <div className="relative pt-3 pl-72">
        <Sidebar />
        <main className="w-full h-full min-h-screen bg-white rounded-tl-3xl">
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;
