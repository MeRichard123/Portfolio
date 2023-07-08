import styled from '@emotion/styled';

export const StyledMain = styled.main`
    height: 100%;
    padding: 70px clamp(10px, 2vw, 70px);
    background: ${(props) => props.theme.colours.section};
    text-align: center;
`;

export const StyledFlexContainer = styled.div`
   display: grid;
    place-items: center;
`;

export const StyledDescription = styled.p`
    max-width: 50ch;
    text-align: center;
    font-size: clamp(1rem, 1.2vw, 1.4rem);
    margin: 20px 0;
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const StyledSkillDivision = styled.div`
  min-width: 30ch;
  text-align: left;
  min-height: 25ch;
  margin: 0 10px;
`;

export const StyledSkillTitle = styled.h3`
  margin: 10px 0 20px -20px;
  position: relative;
  width: 100%;
  &::after{
    content: '';
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colours.text};
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`;
