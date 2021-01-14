import React, { useLayoutEffect } from "react";
import Card from "./Card";
import styled, { keyframes } from "styled-components";
import Australia from "../Assets/img/Projects/Australia.png";
import Rich from "../Assets/img/Projects/Rich UI.png";
import Tedimin from "../Assets/img/Projects/Tedimin.png";
import JakubArt from "../Assets/img/Projects/Jakub Art.png";
import TortTurt from "../Assets/img/Projects/TURTLES.png";
import Equifox from "../Assets/img/Projects/EQUIFOX.png";

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

const projects = [
  {
    title: "Australia",
    stack: "React JS, Styled Components ",
    image: Australia,
    overlayIcons: [<DiReact />],
    code: "https://github.com/MeRichard123/Australia",
    site: "https://merichard123.github.io/Australia/",
    desc:
      "I wanted to build another travel site, but this isn't any old travel site. This site shows the various beauties of Australia using Google maps custom CSS carousels. A Friend wanted as way to show of one of his favorite place: Australia. So I built a way for people to see the beauty within.",
  },
  {
    title: "Rich UI",
    stack: "HTML, SCSS",
    image: Rich,
    overlayIcons: [<DiHtml5 />, <DiSass />],
    code: "https://github.com/MeRichard123/Rich-UI-Docs",
    site: "https://rich-ui.netlify.app/",
    desc: `I wanted my sites to have a certain feel, so that my work is unique. 
      What did I do about this? Yes that's right; I built my own lightweight 
      component library using interesting SCSS features and then built a documentation
      website to go with it. As a result I can speed up my development by having
      already made some of the components I need. Want to know more about this?
      Scroll down and read the blog where I discuss this project in depth`,
  },
  {
    title: "Tedimin",
    stack: "HTML, SCSS",
    image: Tedimin,
    overlayIcons: [<DiHtml5 />, <DiSass />],
    code: "https://github.com/MeRichard123/Tedimin",
    site: "https://merichard123.github.io/Tedimin/",
    desc:
      "Tedimin is a theoretical drug to treat boredom. I was asked to make a website about the testing of drugs to teach students about why medication needs to tested and trialed, I made a site to showcase the product, medical trial and a trail sign up. As a result students in my school learned about the process new drugs go through.",
  },
  {
    title: "Jakub Art",
    stack: "HTML, SCSS, JQuery",
    image: JakubArt,
    overlayIcons: [<DiHtml5 />, <DiSass />, <DiJqueryLogo />],
    code: "https://github.com/MeRichard123/jakubArt",
    site: "https://artjakub.netlify.com/",
    desc:
      "A 'Client' site made for a family member, who needed a personal site. Jakub is an art student, and wanted an online presence to show his work. I created a fully responsive professional site, with an artistic theme. As a result Jakub can show his work and be contacted for any collaborations and requests.",
  },
  {
    title: "Turtles and Tortoises",
    stack: "HTML, CSS3",
    image: TortTurt,
    overlayIcons: [<DiHtml5 />, <DiCss3 />],
    code: "https://github.com/MeRichard123/TurtlesTortoises",
    site: "https://alltheturtles.surge.sh/",
    desc:
      "Turtles and Tortoises are one of my greatest passions. However I felt that even though there are many different types of each, there wasn't really collection of all of them on the Web. So I recreated my first ever Web Project To inform the world about the wonders of the reptile world. Now all the different types are together in an organized fashion. ",
  },
  {
    title: "Equifox",
    stack: "HTML, CSS, Bootstrap, JS",
    image: Equifox,
    overlayIcons: [<DiHtml5 />, <DiCss3 />, <DiBootstrap />, <DiJsBadge />],
    code: "https://github.com/MeRichard123/Equifox",
    site: "https://teamequifox.netlify.com/",
    desc:
      "Equifox is a <acronym title='First Lego League'><a href='http://firstlegoleague.org/'>FLL</a></acronym> team. They needed a way to present themselves at the annual competition without having to carry around lots of posters. They asked me to make them a website so that they can show who they are and how their robot is coming along. As a result they are now able to present their work in a more portable fashion.",
  },
];

function CardsList() {
  useLayoutEffect(() => {
    const div = document.querySelector("#cards");
    div.classList.add("animate");
    return () => {
      div.classList.remove("animate");
    };
  }, []);

  return (
    <Anim id="cards">
      <div className="projectContainer">
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
      </div>
    </Anim>
  );
}
export default CardsList;
