import ReactTooltip from 'react-tooltip';
import Image from 'next/image';
import { SkillList } from './SkillsList';
import {
  StyledMain, StyledFlexContainer, StyledDescription,
  StyledSkillsContainer, StyledIcon, StyledModifiedIcon,
} from './Skills.styles';

const ModIcons = ['Github', 'Express JS', 'NextJS'];

function Skills() {
  return (
    <StyledMain>
      <ReactTooltip effect="solid" padding="15px" border />
      <h2>My Tech Stack</h2>
      <StyledFlexContainer>
        <StyledDescription>
          I have tried many different things over time but these are
          some of my favourite technologies and utilities to use.
        </StyledDescription>
        <StyledSkillsContainer>
          {SkillList.map((skill, index) => {
            if (ModIcons.includes(skill.title)) {
              return (
                <StyledModifiedIcon key={index} data-tip={skill.content}>
                  <Image src={skill.img} width={55} height={75} alt={skill.content} />
                </StyledModifiedIcon>
              );
            }
            return (
              <StyledIcon key={index} data-tip={skill.content}>
                <Image src={skill.img} width={55} height={75} alt={skill.content} />
              </StyledIcon>
            );
          })}
        </StyledSkillsContainer>
      </StyledFlexContainer>
    </StyledMain>
  );
}

export default Skills;
