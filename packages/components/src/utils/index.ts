import tw from "twin.macro";
import { css } from "../stitches.config";

export const getClassName = (twClasses: any) => {
  const item = css(twClasses)();
  return item.className;
};

const opacity0 = getClassName(tw`opacity-0`);
const opacity100 = getClassName(tw`opacity-100`);

export const fadeTransition = {
  enter: getClassName(tw`duration-300 ease-out`),
  enterFrom: opacity0,
  enterTo: opacity100,
  leave: getClassName(tw`duration-200 ease-in`),
  leaveFrom: opacity100,
  leaveTo: opacity0,
};
