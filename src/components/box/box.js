import React from 'react';
import styled from 'styled-components';
import {border, boxShadow, color, flexbox, layout, position, space, background} from 'styled-system';

const BoxContainer = styled.div`
  cursor: ${({onClick}) => (onClick ? 'pointer' : undefined)};

  ${border}
  ${boxShadow}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${background}
`;

/**
 * `Box` is a core building block, which provides all the basic layout, flexbox and spacing props,
 * that are need to build other common components - grid, card and etc.. `Box` accepts props, which are
 * handled by `styled-system` - `border`, `boxShadow`, `color`, `flexbox`, `layout`, `position`, `space`.
 */
export const Box = ({children, dataTestId, ...props}) => (
  <BoxContainer data-testid={dataTestId} {...props}>
    {children}
  </BoxContainer>
);

export default Box;
