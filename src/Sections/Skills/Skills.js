import React from "react";
import styled from "styled-components";
import Tooltip from "react-simple-tooltip";
import Computer from "./Computer";
import { SkillList } from "./SkillList";

const FlexWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  padding: 25px;
  justify-content: space-evenly;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1px;
    grid-template-rows: 1fr;
  }
  @media screen and (min-width: 2200px) {
    max-width: 70%;
    margin: auto;
  }
`;
const SkillContainer = styled.div`
  display: grid;
  width: 100%;
  align-content: center;
  justify-items: center;
  margin: auto;
  gap: 20px;
  padding: 50px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  @media screen and (max-width: 900px) {
    padding: 25px;
    gap: 10px;
  }
`;
const Icon = styled.img`
  box-sizing: border-box;
  object-fit: contain;
  align-items: center;
  width: 55px;
  height: 75px;
  justify-self: center;
  align-self: center;
  filter: grayscale(1);
  transition: all 0.5s ease-out;
  &:hover,
  &:focus {
    filter: grayscale(0);
  }
  @media screen and (min-width: 1900px) {
    width: 105px;
    height: calc(75px * 2);
  }
`;
const ModifiedIcon = styled(Icon)`
  opacity: 0.7;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 10px;
`;
const SecondaryTitle = styled.h3`
  margin: 20px;
  font-weight: 500;
  font-size: 1.4rem;
`;
const Section = styled.section`
  margin-bottom: 5rem;
`;

const ModIcons = ["Github", "Express JS", "NextJS"];

const Skills = () => {
  return (
    <Section>
      <Title>My Tech Stack</Title>
      <SecondaryTitle>
        These are the technologies and utilities I work with.
      </SecondaryTitle>
      <FlexWrapper>
        <SkillContainer>
          {SkillList.map((skill, index) => {
            if (ModIcons.includes(skill.title)) {
              return (
                <Tooltip content={skill.content} key={index}>
                  <ModifiedIcon
                    src={skill.img}
                    title={skill.title}
                    alt={skill.title}
                  />
                </Tooltip>
              );
            } else {
              return (
                <Tooltip content={skill.content}  key={index}>
                  <Icon src={skill.img} title={skill.title} alt={skill.title} />
                </Tooltip>
              );
            }
          })}
        </SkillContainer>
        <Computer />
      </FlexWrapper>
    </Section>
  );
};

export default Skills;
