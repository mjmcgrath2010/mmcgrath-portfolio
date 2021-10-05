import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${({ theme, color }) => theme.colors[color]};
`;

const Button = ({ text, color, variant }) => (
  <StyledButton color={color} variant={variant}>
    {text}
  </StyledButton>
);

export default Button;
