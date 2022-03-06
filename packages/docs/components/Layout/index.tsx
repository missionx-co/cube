import { FC } from "react";
import Sidebar from "./Sidebar";

interface ILayout {}

const Layout: FC<ILayout> = ({ children }) => (
  <div className="relative pt-3 pl-72">
    <Sidebar />
    <main className="w-full h-full min-h-screen bg-white rounded-tl-3xl">
      {children}
    </main>
  </div>
);

export default Layout;
