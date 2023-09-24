import styled from '@emotion/styled';
import ProjectCardList from '../../components/ProjectCardList';
import Button from '../../components/Button';

const Container = styled.main`
    text-align:center;
`;

const Title = styled.h2`
  margin-top: 4rem;
  margin-bottom: 10px;
`;

const Caption = styled.p`
  margin: 1.5rem 0;
`;

const StyledHighLightTitle = styled.h2`
  margin-top: 50px;
  position: relative;
  display: inline;
  &::after{
    content: "";
    position: absolute;
    width: 13vw;
    height: 4px;
    background: black;
    left: -100%;
    transform: translateX(-50%);
    top: 50%;
    @media screen and (max-width:900px){
      left: -50%;
    }
  }
  &::before{
    content: "";
    position: absolute;
    width: 13vw;
    height: 4px;
    background: black;
    right: -100%;
    transform: translateX(50%);
    top: 50%;
    @media screen and (max-width:900px){
      right: -50%;
    }
  }
`;

const cardData = [
  {
    title: 'MD ToC Generator',
    desc: 'Generate ToC for markdown files',
    code: 'https://github.com/MeRichard123/md-contents-generator',
    hasSite: false,
  },
  {
    title: 'CodeWarsKatas',
    desc: 'A Collection of my Code Katas.',
    site: 'https://richardscodekatas.surge.sh/',
    code: 'https://github.com/MeRichard123/CodeWars-CodeKatas-Collection',
    hasSite: true,
  },
  {
    title: 'Pokemon App',
    desc: 'PokeApi Pokedex',
    code: 'https://github.com/merichard123/pokemon-app/',
    hasSite: true,
  },
  {
    title: 'NumWord',
    desc: 'React Number to word calculator',
    site: 'https://merichard123.github.io/numword/',
    code: 'https://github.com/merichard123/numword/',
    hasSite: true,
  },
  {
    title: 'Personal Site',
    desc: 'List, Blog and Long Bio',
    site: 'https://merichard123.github.io/',
    code: 'https://github.com/merichard123/merichard123.github.io/',
    hasSite: true,
  },
  {
    title: 'About me Terminal',
    desc: 'Typewriter Terminal',
    site: 'https://merichard123.github.io/AboutMe-Terminal/',
    code: 'https://github.com/merichard123/AboutMe-Terminal/',
    hasSite: true,
  },
  {
    title: 'Elena Joy',
    desc: 'A Theoretical Photographer',
    site: 'https://merichard123.github.io/Elena-Joy',
    code: 'https://github.com/merichard123/Elena-Joy/',
  },
  {
    title: 'Travelly',
    desc: 'A Theoretical Travel Company',
    site: 'https://merichard123.github.io/Travelly',
    code: 'https://github.com/merichard123/Travelly/',
    hasSite: true,
  },

  {
    title: 'JS-Validation',
    desc: 'Login validation with Javascript',
    site: 'https://merichard123.github.io/JS-Password-Validation',
    code: 'https://github.com/merichard123/JS-Password-Validation/',
    hasSite: true,
  },

  {
    title: 'Pear.com',
    desc: 'Apple.com inspired site',
    site: 'https://merichard123.github.io/Pear.com',
    code: 'https://github.com/merichard123/Pear.com/',
    hasSite: true,
  },
  {
    title: 'Discord Bot',
    desc: 'Built with NodeJS',
    site: '',
    code: 'https://github.com/merichard123/Developers-Discord-Bot/',
    hasSite: false,
  },
];

const HightLightData = [
  {
    title: 'Cing-Cong',
    desc: 'A Pong game implemented in C',
    code: 'https://github.com/MeRichard123/cing-cong',
    hasSite: false,
  },
  {
    title: 'Brainy-Rust',
    desc: 'A Brainfuck interpreter written in Rust',
    code: 'https://github.com/MeRichard123/brainy-rust',
    hasSite: false,
  }, {
    title: 'richBuild',
    desc: 'A header only C build tool written in C',
    code: 'https://github.com/RichTools/richbuild',
    hasSite: false,
  },
];

const index = () => (
  <Container>
    <Title>My Projects</Title>
    <Caption>Other projects which I built in my spare time.</Caption>
    <StyledHighLightTitle>Highlights</StyledHighLightTitle>
    <ProjectCardList cardData={HightLightData} />
    <StyledHighLightTitle>Other Bits</StyledHighLightTitle>
    <ProjectCardList cardData={cardData} />
    <Button link="https://read.cv/merichard123" isExternal>Check out my Read.CV Profile</Button>
  </Container>
);

export default index;
