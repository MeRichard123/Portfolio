import React from "react";
import styled from "styled-components";
import CodeIcon from "../Assets/img/coding.svg";
import PaperIcon from "../Assets/img/paper.svg";
import { Link } from "react-router-dom";

const BlogContainer = styled.section`
  padding: 10px;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin: 20px 0;
`;
const BlogLink = styled.a`
  text-decoration: none;
  color: #001a23;
`;
const SecondaryTitle = styled.h3`
  margin: 20px;
  font-weight: 500;
  font-size: 1.3rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const BlogItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 600px;
  cursor: pointer;
  margin: 1.5rem;
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
    width: 95%;
    margin: auto;
  }
  @media screen and (min-width: 1900px) {
    width: 95%;
  }
`;
const BlogImage = styled.img`
  object-fit: contain;
  border-right: 2px solid black;
  padding: 1.5rem;
  height: 20vh;
  margin: 1.5rem;
  @media screen and (max-width: 900px) {
    padding: 10px;
    height: 12vh;
    margin: 10px;
  }
`;
const Narrative = styled.div`
  padding: 0.5rem;
  @media screen and (max-width: 900px) {
    font-size: 70%;
  }
`;
const BlogTitle = styled.h2`
  padding: 10px;
`;
const BlogDate = styled.h4`
  margin: 10px;
`;
const BlogDesc = styled.p``;

const Button = styled.span`
  padding: 0.8rem 2.5rem;
  color: white;
  text-decoration: none;
  background: #001a23;
  transition: all 250ms ease;
  &:hover {
    opacity: 0.85;
    padding: 0.8rem 4.5rem;
  }
`;

const Blog = () => {
  return (
    <BlogContainer id="blog">
      <Title>My Blog</Title>
      <SecondaryTitle>
        See my blog where I discuss my thoughts and teach others while
        solidifying my own knowledge.
      </SecondaryTitle>
      <FlexContainer>
        <BlogLink
          href="https://dev.to/merichard123/making-my-own-css-framework-50j9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlogItem>
            <BlogImage src={PaperIcon} alt="" />
            <Narrative>
              <BlogTitle>Making my own CSS Framework</BlogTitle>
              <BlogDate>08/06/2020</BlogDate>
              <BlogDesc>
                How I got to building my own CSS framework and why you should
                too.
              </BlogDesc>
            </Narrative>
          </BlogItem>
        </BlogLink>
        <BlogLink
          href="https://dev.to/merichard123/my-website-process-1pg9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlogItem>
            <BlogImage src={CodeIcon} alt="" />
            <Narrative>
              <BlogTitle>My Web Development Process</BlogTitle>
              <BlogDate>04/04/2020</BlogDate>
              <BlogDesc>
                My process for going from idea to design to code.
              </BlogDesc>
            </Narrative>
          </BlogItem>
        </BlogLink>
      </FlexContainer>
      <Link to="/blogs" style={{ textDecoration: "none" }}>
        <Button>See All</Button>
      </Link>
    </BlogContainer>
  );
};

export default Blog;
