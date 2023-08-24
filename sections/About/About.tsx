import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import {
  StyledMain, StyledAboutHeading, StyledBtnGroup, StyledPara,
} from './About.styles';

const calculateAge = (): string => {
  const date: Date = new Date();
  const dob: Date = new Date('11-08-2003');

  const ageInMillis = (date.getTime() - dob.getTime());
  const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
  const roundedAge = ageInYears.toFixed(11);

  return roundedAge.toString();
};

function About() {
  const [ageValue, setAge] = useState<string>('');

  useEffect(() => {
    const timeout = setInterval(() => {
      const age = calculateAge();
      setAge(age);
    }, 1000);
    return () => clearInterval(timeout);
  }, []);
  return (
    <StyledMain id="about">
      <StyledAboutHeading>About Me</StyledAboutHeading>
      <StyledPara id="pg">
        I am Richard, I am a
        {' '}
        {ageValue.split('').map((char, index) => (
          <span
            key={index}
            style={
          { fontSize: (ageValue.length - index) + 4 }
        }
          >
            {char}
          </span>
        ))}
        {' '}
        year old Software Developer and Computer Science Student from the UK.
        I am currently pursuing a bachelors degree at the University of Lincoln; graduating in 2025.
      </StyledPara>
      <StyledPara>
        {/* Eww react doing this weird thing,  I want to redo this in Vue. Crying fr */}
        I like to build
        {' '}
        <b>accessible</b>
        {' '}
        and
        {' '}
        <b>responsive</b>
        {' '}
        sites, which serve their purpose. I am a very
        curious; always eager to learn. I have a passion for
        {' '}
        <b>Design</b>
        {' '}
        and
        {' '}
        <b>Innovation</b>
        {' '}
        because I believe
        all user experience should be aesthetic and functional.
        I am also very interested in NLP and Programming Language/ Compiler Development.
      </StyledPara>
      <StyledPara>
        Unrelated to my studies I enjoy linguistics; languages and the processes in which
        they aid communication have always fascinated me!
      </StyledPara>
      <StyledBtnGroup>
        <Button link="https://github.com/MeRichard123/" isExternal>Github</Button>
        <Button link="https://www.linkedin.com/in/richardcoric/" isExternal>LinkedIn</Button>
        <Button link="/richardcoric.pdf" isExternal>Resume</Button>
      </StyledBtnGroup>
    </StyledMain>
  );
}

export default About;
