import Button from '../../components/Button';
import {
  StyledMain, StyledFlexContainer, StyledDescription,
  StyledSkillsContainer, StyledSkillDivision, StyledSkillTitle,
} from './Skills.styles';
import Bionic from '../../components/Bionic';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

function Skills() {
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);
  return (
    <StyledMain>
      <h2>My Tech Stack</h2>
      <StyledFlexContainer>
        <StyledDescription>
          <Bionic toggleBionic={isADHDMode}>
            I have used a lot of different things over time but here are the things I actually
            like using and some necessary tools.
          </Bionic>
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
        <Button link="/techstack">More Info</Button>
      </StyledFlexContainer>
    </StyledMain>
  );
}

export default Skills;
