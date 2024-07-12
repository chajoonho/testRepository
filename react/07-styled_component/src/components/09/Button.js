import styled from "styled-components";

const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ $back }) => ($back ? "#7760b4" : "yellow")};
  border: none;
  color: ${({ $colorname }) => ($colorname ? "#fff" : "#black")};
  margin: 16px 0;
  padding: 16px;
  font-size: 18px;
  border-radius: ${({ $round }) => ($round ? "9999px" : "8px")};
  cursor: pointer;

  &:hover {
    background-color: ${({ $hoverColor }) =>
      $hoverColor ? "purple" : "orange"};
  }
`;

export default Button;
