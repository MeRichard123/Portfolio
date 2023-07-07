import Image from 'next/image';
import {
  StyledMain, StyledFlexContainer, StyledDescription,
  StyledSkillsContainer, StyledSkillDivision, StyledSkillTitle
} from './Skills.styles';


function Skills() {
  return (
    <StyledMain>
      <h2>My Tech Stack</h2>
      <StyledFlexContainer>
        <StyledDescription>
          I have used a lot of different things over time but here are the things I actually
          like using and some necessary tools.
        </StyledDescription>
        <StyledSkillsContainer>
            <StyledSkillDivision>
              <StyledSkillTitle>Languages</StyledSkillTitle>
              <ul>
                <li>Rust</li>
                <li>Typescript</li>
                <li>C/ C++ </li>
                <li>Python</li>
                <li>Haskell</li>
              </ul>
            </StyledSkillDivision> 
            <StyledSkillDivision>
              <StyledSkillTitle>Frontend</StyledSkillTitle>
                <ul>
                  <li>VueJS</li>
                  <li>React/ Next JS</li>
                  <li>HTML/ CSS</li>
                  <li>SCSS/ Tailwind</li>
                  <li>Styled Components</li>
                </ul>
            </StyledSkillDivision> 
            <StyledSkillDivision>
              <StyledSkillTitle>Backend/ Tools</StyledSkillTitle>
              <ul>
                <li>Django</li>
                <li>Express</li>
                <li>Git</li>
              </ul>
          </StyledSkillDivision> 
        </StyledSkillsContainer>
      </StyledFlexContainer>
    </StyledMain>
  );
}

export default Skills;
