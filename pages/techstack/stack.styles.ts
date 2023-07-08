import styled from '@emotion/styled';

export const StyledSkillMain = styled.main`
  padding: 80px clamp(20px, 2.5vw, 80px);
  min-height: 90vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftAlign = styled.div`
  text-align: left;
  max-width: 60rem;
  width: 100%;
  padding: 50px 0;
`;

export const StyledSkillTitle = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
`;

export const StyledSecondaryHeading = styled.h2`
  font-size: clamp(1.2rem, 2vw, 2rem);
  width: 100%;
  margin-top: 20px;
  position: relative;
  &::after {
    content: '';
    background: ${(props) => props.theme.colours.text};
    height: 3px;
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
  }
`;

export const StyledTertiaryHeading = styled.h3`
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  margin: 30px 0;
`;

export const StyledParagraph = styled.p`

`;

export const StyledLink = styled.a`
  text-decoration: underline;
  color: blue;
`;

export const StyledSmall = styled.small`
  font-size: 0.8rem;
  text-style: italic;
  color: gray;
`;

export default () => { };
