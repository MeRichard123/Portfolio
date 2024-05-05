import { useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
  DiDjango, DiReact, DiAndroid,
} from 'react-icons/di';
import { AiOutlineDotNet } from 'react-icons/ai';
import { SiCsharp } from 'react-icons/si';

import Card from './Card';

const fadeIn = keyframes`
  0%{
    opacity:0
  }i
  100%{
    opacity:1
  }
`;

const Anim = styled.div`
  &.animate {
    animation: 2s ${fadeIn} forwards;
  }
`;

interface ProjectType {
  image: string;
  overlayIcons: any[];
  projectPageLink: string;
}

const projects: ProjectType[] = [
  {
    image: '/assets/projects/iMate.png',
    overlayIcons: [<DiAndroid key={1} />, <AiOutlineDotNet key={2} />, <SiCsharp key={3} />],
    projectPageLink: '/projects/imate',
  },
  {
    image: '/assets/projects/GitMerged.png',
    overlayIcons: [<DiDjango key={1} />],
    projectPageLink: '/projects/gitmerged',
  },
  {
    image: '/assets/projects/TreeMe.png',
    overlayIcons: [<DiDjango key={1} />, <DiReact key={2} />],
    projectPageLink: '/projects/treeme',
  },
  {
    image: '/assets/projects/KSTABLER.png',
    overlayIcons: [<DiReact key={1} />, <DiDjango key={2} />],
    projectPageLink: '/projects/kstabler',
  },
];

function FullStackCardList() {
  // Trigger animation when the component mounts to create a smooth transitions
  useLayoutEffect(() => {
    const div = document.querySelector('#cards');
    div!.classList.add('animate');
    return () => {
      div!.classList.remove('animate');
    };
  }, []);
  return (
    <div className="projectContainer">
      <Anim id="cards">
        {projects.map((project: ProjectType, index: number) => (
          <Card
            key={index}
            image={project.image}
            overlayIcons={project.overlayIcons}
            projectPageLink={project.projectPageLink}
          />
        ))}
      </Anim>
    </div>
  );
}

export default FullStackCardList;
