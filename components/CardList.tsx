import {useEffect}  from 'react'
import Card from './Card';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiJqueryLogo,
  DiReact,
  DiSass,
  DiBootstrap,
} from "react-icons/di";

const fadeIn = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`;

const Anim = styled.div`
  &.animate {
    animation: 2s ${fadeIn} forwards;
  }
`;

interface ProjectType{
  image: string;
  overlayIcons: any[];
  projectPageLink: string;
}

const projects:ProjectType[] = [
  {
    image: "/assets/projects/Australia.png",
    overlayIcons: [<DiReact key={1} />],
    projectPageLink: "/projects/australia"
  },
  {
    image: "/assets/projects/Rich UI.png",
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />],
    projectPageLink: "/projects/rich-ui",
  },
  {
    image: "/assets/projects/Tedimin.png",
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />],
    projectPageLink: "/projects/tedimin",
  },
  {
    image: "/assets/projects/Jakub Art.png",
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />, <DiJqueryLogo key={3} />],
    projectPageLink: "/projects/art",
  },
  {
    image: "/assets/projects/TURTLES.png",
    overlayIcons: [<DiHtml5 key={1}/>, <DiCss3 key={2} />],
    projectPageLink: "/projects/turtles-and-tortoises"
  },
  {
    image: "/assets/projects/EQUIFOX.png",
    overlayIcons: [<DiHtml5 key={1} />, <DiCss3 key={2} />, <DiBootstrap key={3} />, <DiJsBadge key={4} />],
    projectPageLink: "/projects/equifox"
  },
  ];

function CardsList() {
  useEffect(() => {
    const div = document.querySelector("#cards");
    div!.classList.add("animate");
    return () => {
      div!.classList.remove("animate");
    };
  }, []);

  return (
    <Anim id="cards">
      <div className="projectContainer">
        {projects.map((project:ProjectType, index:number) => (
          <Card
            key={index}
            image={project.image}
            overlayIcons={project.overlayIcons}
            projectPageLink={project.projectPageLink}
          />
        ))}
      </div>
    </Anim>
  );
}
export default CardsList;
