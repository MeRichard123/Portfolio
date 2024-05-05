/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface StyleProps {
  isBionic: boolean
}

const StyledButton = styled.button<StyleProps>`
    transition: padding 250ms ease;
    padding: 10px 50px;
    border: ${(props) => props.theme.colours.text} 2px solid;
    color: ${(props) => props.theme.colours.text};
    font-family: ${props => props.isBionic ? 'OpenDyslexic' : 'Lora'}, arial;
    background: transparent;
    // background: ${(props) => props.theme.colours.background};
    margin: 15px;
    font-size: clamp(0.7rem, 2vw, 1rem);

    &:hover{
      transform: scale(1.01) translateY(-4px);
    }
`;

type Props = {
  // darkTheme?: boolean,
  children?: string;
  link: string;
  isExternal?: boolean;
}

function Button({
  children, link, isExternal,
}: Props) {
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);
  return (
    <>
      {isExternal ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <StyledButton isBionic={isADHDMode}>
            {children}
          </StyledButton>
        </Link>
      ) : (
        <Link href={link}>
          <StyledButton isBionic={isADHDMode}>
            {children}
          </StyledButton>
        </Link>
      )}
    </>
  );
}

export default Button;
