import styled from '@emotion/styled';

export const StyledMain = styled.section`
    height: 100%;
    text-align: center;
    padding-top: 10vh;
    padding-bottom: 5em;
`;


export const StyledTabs = styled.div`
  display: inline-flex;
  margin-bottom: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  transition: transform 500ms ease;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    transition: transform 500ms ease;
    width: 50%;
    height: 5px;
    background: currentcolor;
    left: 0;
    bottom: 0;
  }
  &.tab-selected {
    &::after {
      transform: translateX(100%);
    }
  }
`;
export const StyledTab = styled.h3`
  cursor: pointer;
  &:first-of-type {
    margin: 10px 20px 10px 10px;
  }
  &:last-of-type {
    margin: 10px 10px 10px 20px;
  }
`;

export const RestrainedContainer = styled.div`
  margin-bottom: 1.5em;
  margin: 10px;
  @media screen and (min-width: 2200px) {
    max-width: 70%;
    margin: auto;
  }
`;

