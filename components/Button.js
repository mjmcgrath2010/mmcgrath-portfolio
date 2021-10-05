import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme, color }) => theme.colors[color]};
`;

const Button = ({ text, color, onClick, variant }) => (
  <StyledButton color={color} variant={variant}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
