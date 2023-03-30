import Pointer from '../../components/Pointer';
import {
  StyledLandingSection, StyledHeading, StyledHeadingSecondary, StyledSpan,
} from './Landing.styles';

function Landing() {
  return (
    <StyledLandingSection>
      <div>
        <StyledHeading>Hi, I&apos;m Richard!</StyledHeading>
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
