import styled from '@emotion/styled';

export const StyledSettingsContainer = styled.div`
  color: ${(props) => props.theme.colours.text};
  position: relative;
  inset: 0;
  display: grid;
  place-items: center;
  `;

interface SettingsModalProps {
  showing: boolean;
}

export const StyledSettingsControls = styled.div<SettingsModalProps>`
  width: 60vw;
  height: 60vh;
  background: ${(props) => props.theme.colours.background};
  border: 5px solid ${(props) => props.theme.colours.text};
  position: fixed;
  z-index: 500;
  transform: translateY(80%);
  display: ${(props) => (props.showing ? 'block' : 'none')};
  padding: 2.5rem;
  text-align: center;
  @media screen and (max-width:900px){
    width: 70vw;
  }
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
  @media screen and (max-width: 900px){
    width: 100%;
  }
`;

export const StyledThemeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px auto;
`;

export const PrideThemeButton = styled.span`
  width: 50px;
  height: 50px;
  background: linear-gradient(90deg, rgba(255,127,127,1) 0%, rgba(255,180,129,1) 25%, rgba(255,250,139,1) 50%, rgba(156,255,134,1) 76%, rgba(137,216,255,1) 100%);
`;