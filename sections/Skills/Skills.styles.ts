import styled from '@emotion/styled';

export const StyledMain = styled.main`
    height: 100%;
    padding: 10vh;
    background: ${(props) => props.theme.colours.section};
    text-align: center;
`;

export const StyledFlexContainer = styled.div`
    display: grid;
    place-items: center;
    padding: 25px;
`;

export const StyledDescription = styled.p`
    max-width: 50ch;
    text-align: center;
    font-size: clamp(1rem, 1.2vw, 1.4rem);
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledSkillDivision = styled.div`
  padding: 50px;
  margin: 0 20px;
  min-width: 30ch;
  text-align: left;
  min-height: 25ch;
`;

export const StyledSkillTitle = styled.h3`
  margin: 10px 0 20px -20px;
  position: relative;
  width: 100%;
  &::after{
    content: '';
    height: 3px;
    width: 100%;
    background: ${props => props.theme.colours.text};
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`;

