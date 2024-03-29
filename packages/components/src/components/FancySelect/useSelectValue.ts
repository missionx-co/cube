import { Key, useState } from 'react';

const useSelectValue = <T = Key>({
  value,
  defaultValue,
  onChange,
}: {
  value: T;
  defaultValue: T;
  onChange?: (value: T) => any;
}) => {
  const [internalSelectValue, updateInternalSelectValue] =
    useState<T>(defaultValue);

  const handleChange = (key: T) => {
    // if controlled
    if (value !== undefined) {
      onChange && onChange(key);
      return;
    }

    updateInternalSelectValue(key);
    onChange && onChange(key);
  };

  return {
    value: value !== undefined ? value : internalSelectValue,
    onChange: handleChange,
  };
};

export default useSelectValue;
