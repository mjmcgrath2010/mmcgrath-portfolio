import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme, color }) => theme.colors.purple_300};
  padding: ${({ theme: { padding } }) => `${padding.medium} ${padding.large}`};
  color: ${({ theme }) => theme.colors.white_100};
  ${({ theme, $size }) => theme.fontStyles.buttons[$size]}
  outline: none;
  border: none;
  border-radius: 5px;
  line-height: 1.5;
  min-width: 110px;
  cursor: pointer;
`;

const Button = ({ onClick, color, size, text, variant, ...rest }) => (
  <StyledButton
    $color={color}
    onClick={onClick}
    $size={size}
    $variant={variant}
    {...rest}
  >
    {text}
  </StyledButton>
);

Button.defaultProps = {
  color: "primary",
  onClick: () => {},
  text: "Click me",
  size: "medium",
  variant: "outlined",
};

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
    "warning",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["outlined", "contained"]),
};

export default Button;
