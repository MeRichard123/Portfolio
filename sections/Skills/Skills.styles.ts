import styled from '@emotion/styled';

export const StyledMain = styled.main`
    height: 100%;
    padding: 10vh;
    background: #f6f6f6;
    text-align: center;
`;

export const StyledFlexContainer = styled.div`
    display: grid;
    place-items: center;
    padding: 25px;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;

    @media screen and (max-width: 900px) {
        padding: 1px;
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 2200px) {
        max-width: 70%;
        margin: auto;
    }   
`;

export const StyledDescription = styled.div`
    grid-column: 2/3;
    grid-row: 1/1;
    max-width: 30ch;
    text-align: justify;
    margin: 30px 0;
    font-size: clamp(1rem, 1.3vw, 1.5rem);
`;

export const StyledSkillsContainer = styled.div`
    display: grid;
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/1;
    align-content: center;
    justify-items: center;
    margin: auto;
    gap: 20px;
    padding: 50px;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    @media screen and (max-width: 900px) {
        padding: 15px;
        gap: 10px;
    }
`;

export const StyledIcon = styled.div`
    box-sizing: border-box;
    object-fit: contain;
    align-items: center;
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

export const StyledModifiedIcon = styled.div`
    box-sizing: border-box;
    object-fit: contain;
    align-items: center;
    transition: all 0.5s ease-out; 
    opacity: 0.7;
    &:hover,
    &:focus {
        opacity: 1;
    }
    @media screen and (min-width: 1900px) {
        width: 105px;
        height: calc(75px * 2);
    }
`;