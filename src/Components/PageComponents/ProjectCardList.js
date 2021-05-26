import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;


const ProjectCardList = ({cardData}) => {
  return (
    <Container>
      {cardData.map((data, index) => (
        <ProjectCard
          key={index}
          title={data.title}
          desc={data.desc}
          site={data.site}
          code={data.code}
          hasSite={data.hasSite}

        />
      ))}
    </Container>
  );
};

export default ProjectCardList;
