import { css } from "styled-components";

const fontSizes = {
  xSmall: "6px",
  small: "12px",
  medium: "16px",
  large: "22px",
  xLarge: "28px",
};

const fontFamilies = {
  sans_1: "Raleway. sans-serif;",
  sans_2: "Lato, sans-serif;",
};

const fontWeights = {
  light: 300,
  default: 400,
  medium: 500,
  bold: 700,
};

const fontStyles = {
  buttons: {
    small: css`
      font-family: ${fontFamilies.sans_2};
      font-weight: ${fontWeights.default};
      font-size: ${fontSizes.small};
    `,
    medium: css`
      font-family: ${fontFamilies.sans_2};
      font-weight: ${fontWeights.default};
      font-size: ${fontSizes.medium};
    `,
    large: css`
      font-family: ${fontFamilies.sans_2};
      font-weight: ${fontWeights.default};
      font-size: ${fontSizes.large};
    `,
  },
  paragraph: css`
    font-family: ${fontFamilies.sans_2};
    font-weight: ${fontWeights.default};
    font-size: ${fontSizes.medium};
  `,
  heading: css`
    font-family: ${fontFamilies.sans_1};
    font-weight: ${fontWeights.default};
    font-size: ${fontSizes.large};
  `,
};

const typography = {
  fontSizes,
  fontFamilies,
  fontWeights,
  fontStyles,
};

export default typography;
