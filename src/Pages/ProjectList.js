import React from "react";
import styled from "styled-components";
import PageNav from "../Components/PageNav";
import ProjectCardList from "../Components/PageComponents/ProjectCardList";
import Footer from "../Components/Footer";

const Title = styled.h1`
  margin-top: 4rem;
`;

const ProjectList = () => {
  return (
    <div>
      <PageNav />
      <Title>My Projects</Title>
      <ProjectCardList />
      <Footer />
    </div>
  );
};

export default ProjectList;
