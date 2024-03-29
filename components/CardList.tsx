import { useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import {
  DiCss3,
  DiHtml5,
  DiJqueryLogo,
  DiReact,
  DiSass,
} from 'react-icons/di';
import Card from './Card';

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

const projects: ProjectType[] = [
  {
    image: '/assets/projects/dss.png',
    overlayIcons: [<DiReact key={1} />],
    projectPageLink: '/projects/digital-sky-studios',
  },
  {
    image: '/assets/projects/Rich UI.png',
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />],
    projectPageLink: '/projects/rich-ui',
  },
  {
    image: '/assets/projects/Australia.png',
    overlayIcons: [<DiReact key={1} />],
    projectPageLink: '/projects/australia',
  },
  {
    image: '/assets/projects/Jakub Art.png',
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />, <DiJqueryLogo key={3} />],
    projectPageLink: '/projects/jakub-art',
  },
  {
    image: '/assets/projects/TURTLES.png',
    overlayIcons: [<DiHtml5 key={1} />, <DiCss3 key={2} />],
    projectPageLink: '/projects/turtles-and-tortoises',
  },
  {
    image: '/assets/projects/Tedimin.png',
    overlayIcons: [<DiHtml5 key={1} />, <DiSass key={2} />],
    projectPageLink: '/projects/tedimin',
  },
];

function CardsList() {
  useEffect(() => {
    const div = document.querySelector('#cards');
    div!.classList.add('animate');
    return () => {
      div!.classList.remove('animate');
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
