import React from 'react';
import {
  StyledMain, StyledDiv, StyledDivSection, StyledTitleSecondary,
} from './Div.styles';

function Div() {
  return (
    <StyledDivSection>
      <StyledTitleSecondary>Some more important skills.</StyledTitleSecondary>
      <StyledMain>
        <StyledDiv>
          I can center a div.
        </StyledDiv>
      </StyledMain>
    </StyledDivSection>
  );
}

export default Div;
