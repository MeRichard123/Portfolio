import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const cardData = [
  {
    title: "Pokemon App",
    desc: "PokeApi Pokedex",
    site: "https://merichard123.github.io/pokemon-app/",
    code: "https://github.com/merichard123/pokemon-app/",
    hasSite: true,
  },
  {
    title: "NumWord",
    desc: "React Number to word calculator",
    site: "https://merichard123.github.io/numword/",
    code: "https://github.com/merichard123/numword/",
    hasSite: true,
  },
  {
    title: "Personal Site",
    desc: "List, Blog and Long Bio",
    site: "https://merichard123.github.io/",
    code: "https://github.com/merichard123/merichard123.github.io/",
    hasSite: true,
  },
  {
    title: "About me Terminal",
    desc: "Typewriter Terminal",
    site: "https://merichard123.github.io/AboutMe-Terminal/",
    code: "https://github.com/merichard123/AboutMe-Terminal/",
    hasSite: true,
  },
  {
    title: "Productivity Dashboard",
    desc: "Student dashboard app.",
    site: "https://merichard123.github.io/Dashboard",
    code: "https://github.com/merichard123/Dashboard/",
    hasSite: true,
  },
  {
    title: "Elena Joy",
    desc: "A Theoretical Photographer",
    site: "https://merichard123.github.io/Elena-Joy",
    code: "https://github.com/merichard123/Elena-Joy/",
    hasSite: true,
  },
  {
    title: "Travelly",
    desc: "A Theoretical Travel Company",
    site: "https://merichard123.github.io/Travelly",
    code: "https://github.com/merichard123/Travelly/",
    hasSite: true,
  },
  {
    title: "JS-Validation",
    desc: "Login validation with Javascript",
    site: "https://merichard123.github.io/JS-Password-Validation",
    code: "https://github.com/merichard123/JS-Password-Validation/",
    hasSite: true,
  },
  {
    title: "Pear.com",
    desc: "Apple.com inspired site",
    site: "https://merichard123.github.io/Pear.com",
    code: "https://github.com/merichard123/Pear.com/",
    hasSite: true,
  },
  {
    title: "Discord Bot",
    desc: "Built with NodeJS",
    site: "",
    code: "https://github.com/merichard123/Developers-Discord-Bot/",
    hasSite: false,
  },
];

const ProjectCardList = () => {
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
