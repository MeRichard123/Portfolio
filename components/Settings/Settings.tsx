import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { toggleADHDMode, setTheme, Theme } from '../../store/settingsSlice';
import type { RootState } from '../../store/store';
import {
  StyledSettingsContainer, StyledSettingsControls, StyledSwitch,
  StyledSwitchContainer, StyledThemeButtons,
} from './SettingsStyles';
import ThemeButton from './ThemeButton';

const GearButton = styled.button`
  position: absolute;
  top: 60px;
  left: 50px;
  border: 0;
  background: transparent;
  height: 40px;
  width: 40px;
  transform-origin:center;
  transition: transform 50ms cubic-bezier(.03,1.07,.42,.28);
  &:hover{
    transform: rotate(90deg) scale(1.1);
  }
  svg{
    height: 100%;
    width: 100%;
    stroke: ${(props) => props.theme.colours.text};
  }
`;

function Settings() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const dispatch = useDispatch();
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);

  return (
    <StyledSettingsContainer>
      <GearButton onClick={() => setOpen((previousState) => !previousState)} type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </GearButton>

      <StyledSettingsControls showing={open}>
        <p>ADHD Mode?</p>
        <StyledSwitch>
          <p style={{ color: 'black' }}>{!isADHDMode && 'Off'}</p>
          <StyledSwitchContainer>
            <input type="checkbox" name="toggle" id="" onClick={() => dispatch(toggleADHDMode())} />
            <span />
          </StyledSwitchContainer>
          <p>{isADHDMode && 'On'}</p>
        </StyledSwitch>
        <p>Colours:</p>
        <StyledThemeButtons>
          <ThemeButton
            colourLeft="#f5f6fa"
            colourRight="#fff"
            selected={selectedValue}
            id={1}
            OnClick={() => {
              setSelectedValue(1);
              dispatch(setTheme(Theme.LightMode));
              const html = document.querySelector('html');
              if (html?.classList.contains('dark')) {
                html?.classList.remove('dark');
                html?.classList.add('light');
              } else {
                html?.classList.add('light');
              }
            }}
          />
          <ThemeButton
            colourLeft="#000"
            colourRight="#515151"
            selected={selectedValue}
            id={2}
            OnClick={() => {
              setSelectedValue(2);
              dispatch(setTheme(Theme.DarkMode));
              const html = document.querySelector('html');
              if (html?.classList.contains('light')) {
                html?.classList.remove('light');
                html?.classList.add('dark');
              } else {
                html?.classList.add('dark');
              }
            }}
          />
        </StyledThemeButtons>

      </StyledSettingsControls>

    </StyledSettingsContainer>
  );
}

export default Settings;
