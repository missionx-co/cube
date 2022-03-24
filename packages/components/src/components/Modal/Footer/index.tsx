import React from "react";
import tw from "twin.macro";
import { styled } from "../../../stitches.config";

import IFooter from "./IFooter";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const FooterContainer: StyledComponentType<any> = styled("footer", {
  ...tw`p-4`,
});

export type FooterType = React.FC<IFooter>;

const Footer: FooterType = ({ children, ...props }) => {
  return <FooterContainer {...props}>{children}</FooterContainer>;
};

export default Footer;
