import clsx from 'classnames';
import React, { ElementType, createElement, forwardRef } from 'react';
import { useTransition } from 'transition-hook';
import tw from 'twin.macro';

import ForwardedComponent from '../../SharedType/ForwardedComponent';
import { getClassName } from '../../utils';
import ITransition from './ITransition';

const Transition: ForwardedComponent<ITransition, HTMLElement> = forwardRef<
  HTMLElement,
  ITransition
>(
  (
    {
      as: Component,
      show,
      className,
      enter,
      exit,
      duration,
      children,
      ...props
    },
    ref,
  ) => {
    const { stage, shouldMount } = useTransition(show, duration as number);

    if (!shouldMount) {
      return null;
    }

    return createElement(
      Component as ElementType,
      {
        ref,
        className: clsx(className, stage === 'enter' ? enter : exit),
        ...props,
      },
      children,
    );
  },
);

Transition.defaultProps = {
  as: 'div',
  enter: getClassName(tw`opacity-100`),
  exit: getClassName(tw`opacity-0`),
  duration: 150,
};

export default Transition;
