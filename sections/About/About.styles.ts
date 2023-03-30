import styled from '@emotion/styled';

export const StyledMain = styled.section`
    height: 100%;
    text-align: left;
    margin-top: 10vh;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 900px){
        margin: 0 100px;
    }
`;

export const StyledAboutHeading = styled.h2`
    margin-bottom: 15px;
`;

export const StyledPara = styled.p`
    margin: 20px 70px;
    font-size: clamp(1rem, 1.3vw, 1.5rem);
    text-align: justify;
    @media screen and (min-width: 900px){
        max-width: 60%;
    }
`;

export const StyledBtnGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
