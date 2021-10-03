import styled from "styled-components";
import {color, layout, space, typography} from "styled-system";

const StyledTextBase = styled.div`
  margin: 0;
  padding: 0;

  font-family: ${({ $fontFamily }) => $fontFamily};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : undefined)};

  white-space: ${({ whiteSpace }) => whiteSpace};

  ${color}
  ${space}
  ${layout}
  ${typography}
`;

export default StyledTextBase;