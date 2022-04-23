import tw, { globalStyles, theme } from 'twin.macro';

import { globalCss } from './stitches.config';

const customStyles = {
  body: {
    ...tw`font-sans`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
