import styled from '@emotion/styled';

export const StyledMain = styled.section`
    height: 50vh;
    border: 2px dashed black;
    text-align: center;
    margin-top: 10vh;
    margin-bottom: 4rem;
    display: inline-block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 900px){
        margin: 0 100px;
    }
`;

export const StyledDivSection = styled.div`
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 5rem;
`;

export const StyledTitleSecondary = styled.h4`
    max-width: 50%;
    font-size: clamp(1rem, 1.3vw, 1.5rem);
    font-weight: bold;
    margin: 2.5rem auto;
    @media screen and (max-width:900px){
      max-width: 100%;
      padding: 0 20px;
    }
`;

export const StyledDiv = styled.div`
    padding: 2.5rem 3.5rem;
    border: 2px solid black;
    position: relative;
    font-size: 1.1rem;

    &::after{
        content: '<div>';
        position: absolute;
        top: -15px;
        left: 10px;
        padding: 5px;
        background: white;
    }

    &::before{
        content: '</div>';
        position: absolute;
        bottom: -15px;
        right: 10px;
        padding: 5px;
        background: white;
    }
`;
