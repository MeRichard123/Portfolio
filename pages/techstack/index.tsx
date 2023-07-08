import React from 'react'
import { StyledSkillMain, StyledSkillTitle,
  StyledSecondaryHeading, LeftAlign, StyledTertiaryHeading
} from './stack.styles';


const techstack = () => {
  return (
    <StyledSkillMain>
      <StyledSkillTitle>My Tech Stack</StyledSkillTitle>
      <LeftAlign> 
        <StyledSecondaryHeading>Programming Languages</StyledSecondaryHeading>

        <StyledTertiaryHeading>Rust</StyledTertiaryHeading>
      </LeftAlign>
    </StyledSkillMain>
  )
}

export default techstack;
