import styled from "styled-components";
import theme from "../../theme";

const Button = styled.button`
  max-width: 174px;
  background-color: ${theme.colors.primary};
  border-radius: 25px;
  width: 100%;
  height: 32px;
  border: unset;
  cursor: pointer;

  &:hover {
    background-color: #b6232a;
  }
`

export default Button;