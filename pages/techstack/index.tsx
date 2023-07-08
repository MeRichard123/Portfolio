import React from 'react'
import { StyledSkillMain, StyledSkillTitle,
  StyledSecondaryHeading, LeftAlign, StyledTertiaryHeading
} from './stack.styles.ts';


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
