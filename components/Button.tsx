import Link from 'next/link';
import styled from '@emotion/styled';


const StyledButton = styled.button`
    transition: padding 250ms ease;
    padding: 10px 50px;
    border: black 2px solid;
    font-family: 'Lora', serif;
    background: white;
    margin: 15px;
    font-size: clamp(0.7rem, 2vw, 1rem);

    &:hover{
      transform: scale(1.01) translateY(-4px);
    }
`;

type Props = {
    darkTheme?: boolean,
    children?: string;
    link: string;
    isExternal?: boolean;
}

const Button = ({children, darkTheme, link, isExternal}: Props) => {
  return (
      <>
          {isExternal ? (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                  <StyledButton>
                    {children}
                  </StyledButton>
              </Link>) : (
                  <Link href={link}>
                      <StyledButton>
                        {children}
                      </StyledButton>
                  </Link>
              )}
    </>
  )
}

export default Button