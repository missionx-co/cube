import React, {
  Children,
  FC,
  cloneElement,
  Fragment,
  ReactElement,
} from "react";
import tw from "twin.macro";
import clsx from "classnames";

import IButton from "../IButton";

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
            css: {
              ...item.props.css,
              ...tw`rounded-r-none`,
            },
          });
        }

        if (index === totalChildrenCount - 1) {
          return cloneElement(item, {
            css: {
              ...item.props.css,
              ...tw`border-l-0 rounded-l-none`,
            },
          });
        }

        return cloneElement(item, {
          css: {
            ...item.props.css,
            ...tw`border-l-0 border-r rounded-l-none rounded-r-none`,
          },
        });
      })}
    </div>
  );
};

export default ButtonsGroup;
