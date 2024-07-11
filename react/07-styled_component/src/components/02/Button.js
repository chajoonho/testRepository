import React from "react";
import IconImg from "./nail.png";
import styled from "styled-components";

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;

  & ${Icon} {
    margin-right: 4px;
  }
  &:hover {
    ${Icon} {
      opacity: 0.3;
    }
  }
`;

function Button({ children }) {
  return (
    <StyledButton>
      <Icon src={IconImg} />
      {children}
    </StyledButton>
  );
}

export default Button;
