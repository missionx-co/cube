import { css } from "../../stitches.config";

export const getClassName = (twClasses: any) => {
  const item = css(twClasses)();
  return item.className;
};
