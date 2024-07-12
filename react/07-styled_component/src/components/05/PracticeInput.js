import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  border: 2px solid
    ${({ $inputColor }) => ($inputColor ? "#f44336" : "#eeeeee")};

  outline: none;
  padding: 16px;

  margin: 8px;
  font-size: ${({ size }) => SIZES[size] ?? SIZES["medium"]}px;
  border-radius: ${({ $inputBorder }) => ($inputBorder ? "99px" : "4px")};

  &:focus {
    border-color: ${({ $inputColor }) => ($inputColor ? "#f44336" : "#7760b4")};
  }
`;

export default Input;
