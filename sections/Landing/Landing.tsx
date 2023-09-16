import Pointer from '../../components/Pointer';
import {
  StyledLandingSection, StyledHeading, StyledHeadingSecondary, StyledSpan,
} from './Landing.styles';
import Typewriter from 'typewriter-effect';

function Landing() {
  return (
    <StyledLandingSection>
      <div>
        <StyledHeading>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString('Hi, I\'m Richard!')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Hallo, Ich bin Richard!')
              .pauseFor(2500)
              .deleteAll()
              .typeString("Salut, Je suis Richard!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Ahojte, Ja som Richard!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("안녕하세요, 리차드입니다~")
              .pauseFor(2500)
              .deleteAll()
              .typeString('Hi, I\'m Richard!')
              .start()
              .callFunction(() => {
                const cur = document.querySelector('.Typewriter__cursor') as Element; 
                cur?.parentElement?.removeChild(cur);
              });
            }}
            />
          </StyledHeading>
        <StyledHeadingSecondary>
          A
          {' '}
          <StyledSpan>Fullstack Software Developer</StyledSpan>
        </StyledHeadingSecondary>
        <StyledHeadingSecondary>and Creative Coder</StyledHeadingSecondary>
        <Pointer />
      </div>
    </StyledLandingSection>
  );
}

export default Landing;
