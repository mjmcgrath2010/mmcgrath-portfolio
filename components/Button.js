import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme, color }) => theme.colors.purple_300};
  padding: ${({
    theme: {
      spacing: { padding },
    },
  }) => `${padding.medium} ${padding.large}`};
  color: ${({ theme }) => theme.colors.white_100};
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  line-height: 1.5;
  font-family: ${({ theme }) => theme.typography.fontFamilies.sans_2};
  min-width: 110px;
  cursor: pointer;
`;

const Button = ({ onClick, text, color, variant, ...rest }) => (
  <StyledButton $color={color} onClick={onClick} $variant={variant} {...rest}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  color: "primary",
  onClick: () => {},
  text: "Click me",
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
  variant: PropTypes.oneOf(["outlined", "contained"]),
};

export default Button;
