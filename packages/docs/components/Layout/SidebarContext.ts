import { createContext, useContext } from "react";

export const SidebarContext = createContext<{
  activePage: string;
  setActivePage: (e: any) => any;
}>({
  activePage: "home",
  setActivePage: () => {},
});

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  return context;
};
