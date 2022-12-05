import Pointer from '../../components/Pointer';
import {StyledLandingSection, StyledHeading, StyledHeadingSecondary, StyledSpan} from './Landing.styles'

const Landing = () => {
  return (
      <StyledLandingSection>
          <div>
            <StyledHeading>Hi, I&apos;m Richard!</StyledHeading>
            <StyledHeadingSecondary>
              A
              <StyledSpan>Fullstack Web Developer</StyledSpan>
            </StyledHeadingSecondary>
            <StyledHeadingSecondary>and Creative Coder</StyledHeadingSecondary>
            <Pointer />
          </div>
      </StyledLandingSection>
  )
}

export default Landing