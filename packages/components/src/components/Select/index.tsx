import getSelectStyles from '@cube-ui/styles/dist/select';
import React, { FC } from 'react';

import ISelect, { Option } from './ISelect';

const mapThroughOptions = (options: Option[]) => {
  return options.map((option) => {
    if (!option.children) {
      return (
        <option
          key={option.id}
          value={option.id}
          disabled={Boolean(option.disabled)}
        >
          {option.text}
        </option>
      );
    }

    return (
      <optgroup
        key={option.id}
        label={option.text}
        disabled={Boolean(option.disabled)}
      >
        {mapThroughOptions(option.children)}
      </optgroup>
    );
  });
};

const Select: FC<ISelect> = ({ options, className, error, ...props }) => {
  return (
    <select className={getSelectStyles({ error, className })} {...props}>
      {mapThroughOptions(options)}
    </select>
  );
};

export default Select;
