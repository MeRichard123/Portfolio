import styled from '@emotion/styled';

interface ButtonProps{
    selected: number;
    id: number;
    OnClick: () => void;
}

interface ContainerProps{
    selectedButton: boolean;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 100vw;
    tranform-origin: center;
    transform: rotate(-45deg);
    overflow: hidden;
    border: 3px solid ${(props) => (props.selectedButton ? '#00cec9' : 'black')};
    background: linear-gradient(180deg, rgba(255,127,127,1) 0%, rgba(255,180,129,1) 25%, rgba(255,250,139,1) 50%, rgba(156,255,134,1) 76%, rgba(137,216,255,1) 100%);
`;

function ThemeButtonPride({
  selected, id, OnClick,
}: ButtonProps) {
  return (
    <Container selectedButton={selected === id} onClick={OnClick} />
  );
}

export default ThemeButtonPride;

