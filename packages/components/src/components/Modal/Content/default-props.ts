import tw from "twin.macro";
import { getClassName } from "../../../utils";
import { ITransition } from "../IModal";

const opacity0 = getClassName(tw`scale-95 opacity-0`);
const opacity100 = getClassName(tw`scale-100 opacity-100`);

const defaultProps = {
  transition: {
    enter: getClassName(tw`duration-300 ease-out`),
    enterFrom: opacity0,
    enterTo: opacity100,
    leave: getClassName(tw`duration-200 ease-in`),
    leaveFrom: opacity100,
    leaveTo: opacity0,
  } as ITransition,
};

export default defaultProps;
