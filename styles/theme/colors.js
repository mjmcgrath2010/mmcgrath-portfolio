import { css } from "styled-components";

const blue = {
  blue_100: "#85adff",
  blue_200: "#70a0ff",
  blue_300: "#5C92FF",
  blue_400: "#4785FF",
  blue_500: "#256EFF",
};

const purple = {
  purple_100: "#bba0e3",
  purple_200: "#8E61D1",
  purple_300: "#6D37BE",
  purple_400: "#5B2E9E",
  purple_500: "#46237A",
};

const green = {
  green_100: "#86e9be",
  green_200: "#64e3ac",
  green_300: "#30d990",
  green_400: "#26cf86",
  green_500: "#20ac6f",
};

const teal = {
  teal_100: "#7DDED9",
  teal_200: "#4DD1CA",
  teal_300: "#32c3bb",
  teal_400: "#2AA29C",
  teal_500: "#2AA29C",
};

const white = {
  white_100: "#fcfcfc",
  white_200: "#F5F5F5",
  white_300: "#ebebeb",
  white_400: "#e0e0e0",
  white_500: "#d6d6d6",
};

const red = {
  red_100: "#ffadb6",
  red_200: "#ff8591",
  red_300: "#FF707E",
  red_400: "#FF5C6C",
  red_500: "#ff495c",
};

const yellow = {
  yellow_100: "#F0EA94",
  yellow_200: "#EDE682",
  yellow_300: "#e8df5e",
  yellow_400: "#E3D83B",
  yellow_500: "#E0D429",
};

const pallet = {
  buttons: {
    contained: {
      primary: css`
        color: ${white.white_100};
        border: ${`2px solid ${purple.purple_300}`};
        background: ${purple.purple_300};
      `,
      secondary: css`
        color: ${white.white_100};
        border: ${`2px solid ${teal.teal_300}`};
        background: ${teal.teal_300};
      `,
      danger: css`
        color: ${white.white_100};
        border: ${`2px solid ${red.red_300}`};
        background: ${red.red_300};
      `,
      success: css`
        color: ${white.white_100};
        border: ${`2px solid ${green.green_300}`};
        background: ${green.green_300};
      `,
      info: css`
        color: ${white.white_100};
        border: ${`2px solid ${blue.blue_300}`};
        background: ${blue.blue_300};
      `,
      warning: css`
        color: ${white.white_100};
        border: ${`2px solid ${yellow.yellow_300}`};
        background: ${yellow.yellow_300};
      `,
    },
    outlined: {
      primary: css`
        color: ${purple.purple_300};
        border: ${`2px solid ${purple.purple_300}`};
        background: ${white.white_100};
      `,
      secondary: css`
        color: ${teal.teal_300};
        border: ${`2px solid ${teal.teal_300}`};
        background: ${white.white_100};
      `,
      danger: css`
        color: ${red.red_300};
        border: ${`2px solid ${red.red_300}`};
        background: ${white.white_100};
      `,
      success: css`
        color: ${green.green_300};
        border: ${`2px solid ${green.green_300}`};
        background: ${white.white_100};
      `,
      info: css`
        color: ${blue.blue_300};
        border: ${`2px solid ${blue.blue_300}`};
        background: ${white.white_100};
      `,
      warning: css`
        color: ${yellow.yellow_300};
        border: ${`2px solid ${yellow.yellow_300}`};
        background: ${white.white_100};
      `,
    },
  },
};

const colors = {
  ...blue,
  ...purple,
  ...green,
  ...white,
  ...red,
  ...teal,
  ...yellow,
  ...pallet,
};

export default colors;
