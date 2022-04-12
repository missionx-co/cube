import { Key, useState } from "react";

const useSelectValue = ({
  value,
  defaultValue,
  onChange,
}: {
  value?: Key;
  defaultValue?: Key;
  onChange?: (value?: Key) => any;
}) => {
  const [internalSelectValue, updateInternalSelectValue] = useState<
    Key | undefined
  >(defaultValue ?? undefined);

  const handleChange = (key?: Key) => {
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
