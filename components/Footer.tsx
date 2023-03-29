import styled from '@emotion/styled';

const StyledFooter = styled.footer`
    padding: 2.5rem 1.5rem;
    background: ${(props) => props.theme.colours.footerBackground};
    color: white;
`;

function Footer() {
  return (
    <StyledFooter>
      Richard Coric &copy;
      {new Date().getFullYear()}
    </StyledFooter>
  );
}

export default Footer;
