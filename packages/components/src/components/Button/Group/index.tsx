import clsx from 'classnames';
import React, {
  Children,
  FC,
  Fragment,
  ReactElement,
  cloneElement,
} from 'react';

import IButton from '../IButton';

export interface IButtonsGroup {
  children: IButton | IButton[];
}

const ButtonsGroup: FC<IButtonsGroup> = ({ children }) => {
  const totalChildrenCount = Children.count(children);
  if (totalChildrenCount === 1) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <div className="flex items-center">
      {Children.map(Children.toArray(children), (child, index) => {
        const item = child as ReactElement<any, any>;
        if (index === 0) {
          return cloneElement(item, {
            className: clsx('rounded-r-none', item.props.className),
          });
        }

        if (index === totalChildrenCount - 1) {
          return cloneElement(item, {
            className: clsx('border-l-0 rounded-l-none', item.props.className),
          });
        }

        return cloneElement(item, {
          className: clsx(
            'border-l-0 border-r rounded-l-none rounded-r-none',
            item.props.className,
          ),
        });
      })}
    </div>
  );
};

export default ButtonsGroup;
