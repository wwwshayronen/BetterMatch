import React from "react";
import { styled } from "styled-components";
import { theme } from "./colors";
export interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background-color: ${theme.primary};
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 999px;
`;
