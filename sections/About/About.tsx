import Button from '../../components/Button';
import {
  StyledMain, StyledAboutHeading, StyledBtnGroup, StyledPara,
} from './About.styles';

const calculateAge = (): number => {
  const date = new Date();
  const dob = new Date('08/11/2003');

  let yearDiff = date.getFullYear() - dob.getFullYear();

  if (date.getMonth() < dob.getMonth()
    || (date.getMonth() === dob.getMonth() && date.getDate() < dob.getDate())) {
    yearDiff--;
  }

  return yearDiff;
};

function About() {
  return (
    <StyledMain id="about">
      <StyledAboutHeading>About Me</StyledAboutHeading>
      <StyledPara>
        I am Richard, I am a
        {' '}
        {calculateAge()}
        {' '}
        year old Software Developer and Computer Science Student from the UK.
        I am currently pursuing a bachelors degree at the University of Lincoln; graduating in 2025.
      </StyledPara>
      <StyledPara>
        I like to build
        {' '}
        <b>accessible</b>
        {' '}
        and
        <b>responsive</b>
        {' '}
        sites, which serve their purpose. I am a very
        curious; always eager to learn. I have a passion for
        <b>Design</b>
        {' '}
        and
        <b>Innovation</b>
        {' '}
        because I believe
        all user experience should be aesthetic and functional.
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
