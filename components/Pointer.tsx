import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const StyledArrow = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translateY(-30px) translateX(-50%) rotate(45deg);
`;

const Strobe = keyframes`
    0% {
        top: -5px;
        left: -5px;
        opacity: 0;
    }
    25% {
        top: 0px;
        left: 0px;
        opacity: 1;
    }

    50%, 100% {
        top: 5px;
        left: 5px;
        opacity: 0;
    }
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  animation: ${Strobe} 1.5s linear infinite;
  &:nth-of-type(1) {
    transform: translate(-15px, -15px);
    animation-delay: -0.4s;
  }
  &:nth-of-type(2) {
    transform: translate(0, 0);
    animation-delay: -0.2s;
  }
  &:nth-of-type(3) {
    transform: translate(15px, 15px);
    animation-delay: -0s;
  }
`;

const Pointer = () => {
  return (
    <StyledArrow>
      <Line />
      <Line />
    </StyledArrow>
  );
};

export default Pointer;