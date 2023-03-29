import styled from '@emotion/styled';
import Button from '../components/Button';

const StyledMain = styled.main`
    height: 100vh;
    display: grid;
    place-items: center;
`;
const StyledHeading = styled.h2`
    margin: 20px;
`;
const StyledContainer = styled.div`
    text-align: center;
`;

export default function Custom404() {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledHeading>Oop- looks like you are lost!</StyledHeading>
        <Button link="/">Go Home</Button>
      </StyledContainer>
    </StyledMain>
  );
}
