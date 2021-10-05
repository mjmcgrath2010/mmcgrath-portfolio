import React from "react";

import Button from "../Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Button",
  variant: "contained",
  color: "primary",
};
