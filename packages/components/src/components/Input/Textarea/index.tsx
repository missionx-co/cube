import getInputStyles from '@cube-ui/styles/dist/input';
import React, { FC } from 'react';

import ITextarea from './ITextarea';

const Textarea: FC<ITextarea> = ({ error, className, ...props }) => (
  <textarea className={getInputStyles(error, className)} {...props} />
);
Textarea.defaultProps = {
  error: false,
};

export default Textarea;
