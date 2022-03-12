import React, { FC, SVGProps } from "react";
import tw from "twin.macro";
import { styled } from "../stitches.config";
import { StyledComponentType } from "@stitches/core/types/styled-component";

const SVG: StyledComponentType<any> = styled("svg", {
  ...tw`fill-current`,
});

const InfoCircleIcon: FC<SVGProps<SVGSVGElement>> = ({
  children,
  ...props
}) => (
  <SVG xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" {...props}>
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
    <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
  </SVG>
);

export default InfoCircleIcon;
