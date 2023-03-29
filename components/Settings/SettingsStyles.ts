import styled from '@emotion/styled';
import Image from 'next/image';

export const StyledSettingsContainer = styled.div`
  color: black;
  position: relative;
  inset: 0;
  display: grid;
  place-items: center;
  `;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 60px;
  left: 50px;
  transition: transform 50ms cubic-bezier(.03,1.07,.42,.28);
  &:hover{
    transform: rotate(90deg) scale(1.1);
  }
`;

interface SettingsModalProps {
  showing: boolean;
}

export const StyledSettingsControls = styled.div<SettingsModalProps>`
  width: 60vw;
  height: 60vh;
  background: white;
  border: 5px solid black;
  position: fixed;
  z-index: 999;
  transform: translateY(80%);
  display: ${(props) => (props.showing ? 'block' : 'none')};
  padding: 2.5rem;
  text-align: center;
`;

export const StyledSwitchContainer = styled.label`
  position: relative;
  display:  block;
  width: 200px;
  height: 50px;
  margin: 10px auto 10px auto;
  padding: 5px;
  z-index: 0;
  input{
    opacity: 0;
    width: 0;
    height: 0;
    z-index: 1;
    position: relative;

    &:checked + span::before {
      transform: translateX(138%);
      right: 5px;
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    z-index: 2;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    &::before{
      position: absolute;
      content: "";
      width: 40%;
      left: 5px;
      bottom: 5px;
      top: 5px;
      background-color: #F7F7F7;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
`;

export const StyledSwitch = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 250px;
  margin: 10px auto;
  gap: 10px;
  position: relative;
  p:first-of-type{
    width: 20px;
    position: absolute;
    right: 50px;
    z-index: 5;
  }
  p:last-of-type{
    width: 20px;
    position: absolute;
    left: 50px;
  }
`;

export const StyledThemeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px auto;
`;
