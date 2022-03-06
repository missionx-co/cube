import { createStitches, CSS as StitchesCSS } from "@stitches/react";

export const stitches = createStitches({
  prefix: "",
  theme: {},
  utils: {},
});

export const { css, styled, globalCss, theme, keyframes, getCssText } =
  stitches;
