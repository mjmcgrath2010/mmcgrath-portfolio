import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ theme: { padding } }) => `${padding.medium} ${padding.large}`};
  border-radius: 5px;
  line-height: 1.5;
  min-width: 110px;
  cursor: pointer;
  ${({ theme, $size }) => theme.fontStyles.buttons[$size]}
  ${({ theme, $color, $variant }) => theme.colors.buttons[$variant][$color]}
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
  variant: "contained",
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
