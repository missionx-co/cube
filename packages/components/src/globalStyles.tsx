import tw, { theme, globalStyles } from "twin.macro";
import { globalCss } from "./stitches.config";

const customStyles = {
  body: {
    ...tw`font-sans bg-gray-900`,
  },
};

const styles = () => {
  globalCss(customStyles)();
  globalCss(globalStyles as Record<any, any>)();
};

export default styles;
