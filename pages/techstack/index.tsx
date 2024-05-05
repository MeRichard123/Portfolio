import React from 'react';
import { useSelector } from 'react-redux';
import {
  StyledSkillMain, StyledSkillTitle,
  StyledSecondaryHeading, LeftAlign, StyledTertiaryHeading, StyledParagraph,
  StyledLink, StyledSmall,
} from './stack.styles';
import Bionic from '../../components/Bionic';
import type { RootState } from '../../store/store';

const techstack = () => {
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);
  return (
    <StyledSkillMain>
      <StyledSkillTitle>My Tech Stack</StyledSkillTitle>
      <LeftAlign>
        <StyledParagraph>
          <Bionic toggleBionic={isADHDMode}>
            tlr; At the end of the day, I don&apos;t really have a preference, I accept every
            single tool on this list has its flaws, but also some handy features. I decide what I
            use on a project per project basis.
          </Bionic>
        </StyledParagraph>
        <StyledSecondaryHeading>Programming Languages</StyledSecondaryHeading>
        <>
          <StyledTertiaryHeading>Rust</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Rust is known to be a &apos;safe&apos; Programming Language. I like it because it has some
              really neat features, like pattern matching and other nice bits I like about Haskell. I
              think the compiler albeit annoying is really helpful during development. I also really
              like how Rust handles errors; Errors as values is so much nicer than try catch. Currently
              I use Rust as a general purpose language but I hope to use it for more specific things
              like web servers in the future.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>Typescript</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Typescript. The supposedly type safe version of Javascript. Javascript is a mess of
              Programming language design, Typescript may not fix all of its issues, but it allows
              for some level of type safety. The on going debate of JS Doc vs Typescript is not
              something I want to be involved in, but I&apos;ll use typescript for the sake of it
              anyway. I tend to use Typescript as the language for using Frontend and Backend web
              libraries, purely because I enjoy the autocomplete.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>
            C/ C++
            {' '}
            <StyledSmall>/^C(#|\+\+)?$/</StyledSmall>
          </StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              The holy duo. C was created in the 1970s by Dennis Ritchie and is just great,
              it is super simple (to an extent) no bloat. I like how fast and simple it is.
              It initially learned this learn more about how computers work on
              a low level, and memory management. C++ is something I have to learn at University, so I
              don&apos;t really use it outside of that, but I heard understanding it is useful in the
              real world. C++ was created by Bjarne Stroustrup in 1985 as an extension of C.
              I also did some C# at University so I am familiar with it a little. Once may say I
              have the infinity gauntlet of C (only missing Holy C, maybe soon!).
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>Python</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Python is &quot;a general-purpose programming language&quot; widely used for Data Science.
              This one is here because it was the first programming language I learned. I don&apos;t
              really like using it (not because it is bad, but because I have other preferences),
              and if I had to I think I would use Mojo its better superset.
              I have used Python for a very long time I mainly use it for demos nowadays.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>Haskell</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Haskell is a purely functional language created by mathematicians.
              I found that learning a pure functional programming language changes the way you think
              about stuff. It is a very mathematical language, which I think is quite fun to use from
              time to time. I only really use it for coding problems, when I feel like changing
              languages, or some from of
              {' '}
              {' '}
              <StyledLink href="https://www.urbandictionary.com/define.php?term=compsoy">&quot;comp soyery&quot;</StyledLink>
              .
            </Bionic>
          </StyledParagraph>
        </>
        <StyledSecondaryHeading>Frontend Tools</StyledSecondaryHeading>
        <>
          <StyledTertiaryHeading>Vue JS</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Vue is probably my favourite frontend framework, due to its simplicity, and ease
              of use. I love the tooling and community that surrounds it. If I had to recommend
              a frontend framework to anyone it would be Vue. The options API gives you a nice
              basis for how to structure your code. Vue like many others focuses on building UIs
              but with better DX.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>React / Next JS</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              React is another frontend framework for building UIs.
              I&apos;ve used it in the past, it&apos;s ok. I used it extensively
              for ages. Again its not bad I just prefer Vue. I do really like Next JS though, makes
              backend code really easy, I like how they structure the code. I also like having the
              power of SSR.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>HTML / CSS</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              HTML5 and CSS3 are pretty self explanatory. They are the backbone of any website,
              hence knowing them is key for any web developer. HTML is used for the structure and
              actual content, CSS makes it look pretty.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>SCSS / Tailwind / Styled Components</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              I have used a lot of different libraries for styling a webpage. SCSS is an extension on
              CSS which allows for nesting, and some programming like structures such as loops.
              Tailwind is library made up of lots of utility classes which you use to style your site.
              Styled Components is a CSS-in-JS type solution. I like tailwind because of how easy it is
              to use and set up. I use Styled Components too because sometimes it is nice to have JS
              like functionality in CSS. I don&apos;t really have a preference I just use whatever I
              feel like using that day.
            </Bionic>
          </StyledParagraph>
        </>
        <StyledSecondaryHeading>Backend and other Tools</StyledSecondaryHeading>
        <>
          <StyledTertiaryHeading>Django</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Django is a full stack python framework, I learned it at a time where I used python a
              a lot. I started like most people using templates, I later moved to only using the
              Rest Framework to make API using Django. I used this one the most, so I became comfortable
              with it and continued using it. I don&apos;t really use it that much nowadays.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>Express</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              I haven&apos;t used this too much, but in the little experience I have, I love how simple
              this one is. It allows for super clean apps and I really like using it. I have been
              a little with Deno recently too.
            </Bionic>
          </StyledParagraph>
          <StyledTertiaryHeading>Git</StyledTertiaryHeading>
          <StyledParagraph>
            <Bionic toggleBionic={isADHDMode}>
              Git is used for version management, knowing your way around git is very important. I like
              most people know my way around Git a little, but if anything goes wrong I will panic
              and turn to tools like
              {' '}
              <StyledLink href="https://ohshitgit.com/">OShitGit</StyledLink>
              {' '}
              and
              {' '}
              <StyledLink href="https://gitexplorer.com/">GitExplorer</StyledLink>
              .
            </Bionic>
          </StyledParagraph>
        </>
      </LeftAlign>
    </StyledSkillMain>
  );
};

export default techstack;
