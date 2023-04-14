import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { toggleADHDMode, setTheme, Theme } from '../../store/settingsSlice';
import type { RootState } from '../../store/store';
import {
  StyledSettingsContainer, StyledSettingsControls, StyledSwitch,
  StyledSwitchContainer, StyledThemeButtons,
} from './SettingsStyles';
import ThemeButton from './ThemeButton';
import ThemeButtonPride from './ThemeButtonPride';

const GearButton = styled.button`
  position: absolute;
  top: 60px;
  left: 50px;
  border: 0;
  background: transparent;
  height: 30px;
  width: 30px;
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
  @media screen and (max-width: 900px){
    left: 25px;
    top: 70px;
  }
`;

const Spacer = styled.div`
  margin-top: 30px;
`;

const clearThemes = (newTheme: string) => {
  const html = document.querySelector('html')?.classList;
  const allThemes = ['light', 'dark', 'pink', 'green', 'pride'];
  allThemes.forEach(theme => {
    if (theme != newTheme) {
      if (html?.contains(theme)) {
        html.remove(theme);
      }
      html?.add(newTheme);
    }  
  })
}

function Settings() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const dispatch = useDispatch();
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const matches = window.matchMedia("(prefers-color-scheme: dark)");
    if (matches.matches) { 
      dispatch(setTheme(Theme.DarkMode));
      clearThemes('dark');
    } else {
      dispatch(setTheme(Theme.LightMode));
      clearThemes('light');
    }
  }, []);

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
        {isADHDMode && 'This feature is coming soon'}
        <Spacer>
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
              clearThemes('light'); 
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
              clearThemes('dark'); 
            }}
            />
          <ThemeButton
            colourLeft="#fce5e5"
            colourRight="#ff7474"
            selected={selectedValue}
            id={3}
            OnClick={() => {
              setSelectedValue(3);
              dispatch(setTheme(Theme.PinkMode));
              clearThemes('pink');
            }}
          />
          <ThemeButton
            colourLeft="#E8F1F2"
            colourRight="#31493C"
            selected={selectedValue}
            id={4}
            OnClick={() => {
              setSelectedValue(4);
              dispatch(setTheme(Theme.GreenMode));
              clearThemes('green'); 
            }}
            />
          <ThemeButtonPride
            selected={selectedValue}
            id={5}
            OnClick={() => {
              setSelectedValue(5);
              dispatch(setTheme(Theme.PrideMode));
              clearThemes('pride'); 
            }}
            />
        </StyledThemeButtons>
        <div>
          {selectedValue === 1 && <p>Very clean. Love it.</p>}
          {selectedValue === 2 && <p>Oooh I see how it is.</p>}
          {selectedValue === 3 && <p>Very Exotic. Nice.</p>}
          {selectedValue === 4 && <p>Feeling Nostalgic?</p>}
          {selectedValue === 5 && <p>Slay Queen 💅🏳‍🌈</p>}
        </div>
            </Spacer>
      </StyledSettingsControls>

    </StyledSettingsContainer>
  );
}

export default Settings;
