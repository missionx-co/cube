import { useState } from 'react';

const useRowSelect = (
  data: any[],
  uniqueKey: string,
  onRowSelected?: (selected: string[]) => any,
) => {
  const [selectedRows, updateSelectedRows] = useState<string[]>([]);

  const isAllSelected = selectedRows.length === data.length && data.length > 0;
  const isSomeSelected = !isAllSelected && selectedRows.length > 0;

  const toggleRowSelection = (key: string, checked: boolean) => {
    let selected = [];
    if (!checked) {
      selected = selectedRows.filter((selectedKey) => selectedKey !== key);
    } else {
      selected = [...selectedRows, key];
    }

    updateSelectedRows(selected);
    onRowSelected && onRowSelected(selected);
  };

  const toggleAllSelection = () => {
    // if selectedRows length is equal to all data length that means that all data is selected
    if (isAllSelected) {
      updateSelectedRows([]);
      return;
    }

    updateSelectedRows(data.map((row) => row[uniqueKey]));
  };

  return {
    selectedRows,
    isAllSelected,
    isSomeSelected,
    toggleRowSelection,
    toggleAllSelection,
  };
};

export default useRowSelect;
