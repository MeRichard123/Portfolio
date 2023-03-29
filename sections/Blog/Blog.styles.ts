import styled from '@emotion/styled';

export const StyledMain = styled.main`
    height: 100%;
    background-color: white;
    padding: 10vh 0;
    text-align: center;
    @media screen and (max-width:900px){
        padding: 10vh 10px 0 10px;
    }
`;

export const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

export const StyledTitleSecondary = styled.h4`
    max-width: 50%;
    font-size: clamp(1rem, 1.3vw, 1.5rem);
    font-weight: 400;
    margin: 10px auto 2.5rem auto;
    @media screen and (max-width:900px){
      max-width: 100%;
      padding: 0 20px;
    }
`;

export const StyledBlogLink = styled.a`
  text-decoration: none;
  color: #001a23;
  max-width: 100%;
  margin: auto;
`;

export const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2.5rem 2rem;
  width: 600px;
  cursor: pointer;
  margin: 1rem;
  transition: transform 0.5s;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
  }
  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    max-width: 100%;
    margin: 20px auto;
    padding: 1rem;
  }
  @media screen and (min-width: 1900px) {
    width: 95%;
  }
`;

export const StyledBlogSpan = styled.span`
  margin: 20px 0;
`;

export const StyledBlogTitle = styled.h5`
  font-size: clamp(1rem, 1.3rem, 1.5rem);
`;

export const StyledBlogs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    position: relative;
    flex-wrap: wrap;
    @media screen and (max-width: 900px){
        flex-direction: column;
    }

    &::after{
        content: "";
        width: 2px;
        height: 60%;
        position: absolute;
        background-color: black;
        @media screen and (max-width:1280px){
            transform: rotate(90deg);
        }
    }
`;
