import React, { useState } from "react";
import CardsList from "../Components/CardList";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FullStackCardList from "../Components/FullStackCardList";

const Container = styled.section`
  background: #e8f2eb;
  padding: 2.5rem;
  margin-bottom: 5.5rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 10px 0 20px 0;
`;

const Button = styled.span`
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  margin-bottom: 100px;
  background: #001a23;
  transition: all 250ms ease;
  &:hover {
    opacity: 0.85;
    padding: 1rem 3rem;
  }
`;

const Tabs = styled.div`
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
const Tab = styled.h2`
  cursor: pointer;
  &:first-of-type {
    margin: 10px 20px 10px 10px;
  }
  &:last-of-type {
    margin: 10px 10px 10px 20px;
  }
`;
const RestrainedContainer = styled.div`
  @media screen and (min-width: 2200px) {
    max-width: 70%;
    margin: auto;
  }
`;

const Projects = () => {
  const [frontend, setFrontend] = useState(true);

  const toggle = () => {
    setFrontend((prevState) => !prevState);
  };

  return (
    <Container id="projects">
      <Title>Some of my Work</Title>
      <Tabs className={frontend ? "" : "tab-selected"}>
        <Tab onClick={toggle}>Frontend</Tab>
        <Tab onClick={toggle}>Fullstack</Tab>
      </Tabs>
      <RestrainedContainer>
        {frontend ? <CardsList /> : <FullStackCardList />}
      </RestrainedContainer>

      <Link to="/projects" style={{ textDecoration: "none" }}>
        <Button>View More</Button>
      </Link>
    </Container>
  );
};

export default Projects;
