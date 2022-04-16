import { Key, createContext, useContext } from 'react';

interface SelectContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
}

export const SelectContext = createContext({} as SelectContextValue);

export const useSelectContext = () => {
  return useContext(SelectContext);
};
