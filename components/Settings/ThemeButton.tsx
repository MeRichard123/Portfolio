import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps{
    colourLeft: string;
    colourRight: string;
    selected: number;
    id: number;
    OnClick: () => void;
}

interface SemiCircleProps{
    colour: string;
    bottom?: boolean;
}

const SemiCircle = styled.span<SemiCircleProps>`
    display: block;
    width: 50px;
    height: 25px;
    background: ${(props) => props.colour};
    border-radius: 100vw 100vw 0 0;
    transform: rotate(${(props) => (props.bottom ? '180deg' : '0deg')});
    /* margin-top: ${(props) => (props.bottom ? '1px' : '0')}; */
    /* margin-bottom: ${(props) => (props.bottom ? '0' : '1px')}; */
`;

interface ContainerProps{
    selectedButton: boolean;
    colourLeft: string;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 100vw;
    tranform-origin: center;
    transform: rotate(-45deg);
    background: ${(props) => props.colourLeft};
    overflow: hidden;
    border: 3px solid ${(props) => (props.selectedButton ? '#00cec9' : 'black')}

`;

function ThemeButton({
  colourLeft, colourRight, selected, id, OnClick,
}: ButtonProps) {
  return (
    <Container selectedButton={selected === id} onClick={OnClick} colourLeft={colourLeft}>
      <SemiCircle colour={colourLeft} />
      <SemiCircle colour={colourRight} bottom />
    </Container>
  );
}

export default ThemeButton;
