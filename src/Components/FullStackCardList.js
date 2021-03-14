import React, { useLayoutEffect } from "react";
import Card from "./Card";
import styled, { keyframes } from "styled-components";
import GitMerged from "../Assets/img/Projects/GitMerged.png";
import TreeMe from "../Assets/img/Projects/TreeMe.png";

import { DiDjango, DiReact } from "react-icons/di";

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

const projects = [
  {
    title: "GitMerged",
    stack: "Django",
    image: GitMerged,
    overlayIcons: [<DiDjango />],
    code: "https://github.com/MeRichard123/GitMerged",
    site: "https://youtu.be/UVIPgdafxew",
    desc:
      "As Developers finding a Date can be difficult, as we sit at a screen all day. Furthermore it can be tedious to keep explaining what we do. This is where GitMerged comes in. GitMerged is a tinder like platform where developers can share their interests and the technologies they work with. As a result developers can connect with each other and find their true love. ",
    siteText: "Demo",
  },
  {
    title: "TreeMe",
    stack: "Django Rest Framework, ReactJS",
    image: TreeMe,
    overlayIcons: [<DiDjango />, <DiReact />],
    code: "https://github.com/MeRichard123/family-tree-app",
    site: "https://youtu.be/ZNlDaqYrIto",
    desc:
      "The Terms and Relationships between different family members can be tough, to understand and to remember for those who didn't grow up with it. TreeMe allows users to see the relationships between different members. Logged in users are able to add their own family members to the tree. Since building this many of my Friends and Family have been able to better visualise the complexity of the all important Family Tree diagram",
    siteText: "Demo",
  },
];

const FullStackCardList = () => {
  // Trigger animation when the component mounts to create a smooth transitions
  useLayoutEffect(() => {
    const div = document.querySelector("#cards");
    div.classList.add("animate");
    return () => {
      div.classList.remove("animate");
    };
  }, []);
  return (
    <div className="projectContainer">
      <Anim id="cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            overlayIcons={project.overlayIcons}
            title={project.title}
            stack={project.stack}
            desc={project.desc}
            code={project.code}
            site={project.site}
            siteText={project?.siteText}
          />
        ))}
      </Anim>
    </div>
  );
};

export default FullStackCardList;
