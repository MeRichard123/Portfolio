import styled from '@emotion/styled';

export const StyledLandingSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    width: 100wv;
    justify-content: center;
    margin: 0 10px;
    text-align: center;
    background-color: ${(props) => props.theme.colours.background};
    color: ${(props) => props.theme.colours.text};
`;

export const StyledHeading = styled.h1`
    font-family: 'Josefin Slab', serif;;
    font-weight: bold;
    margin: 30px 0;
    letter-spacing: 10px;
`;

export const StyledHeadingSecondary = styled.h2`
    font-weight: 400;
`;

export const StyledSpan = styled.span`
    font-style: italic;
`;
