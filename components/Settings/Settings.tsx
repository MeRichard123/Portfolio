import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleADHDMode, setTheme, Theme } from '../../store/settingsSlice';
import type { RootState } from '../../store/store';
import {
  StyledSettingsContainer, StyledImage, StyledSettingsControls, StyledSwitch,
  StyledSwitchContainer, StyledThemeButtons,
} from './SettingsStyles';
import ThemeButton from './ThemeButton';

function Settings() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const dispatch = useDispatch();
  const isADHDMode: boolean = useSelector((state: RootState) => state.settings.ADHDMode);

  return (
    <StyledSettingsContainer>
      <StyledImage
        src="/assets/settings.svg"
        width={35}
        height={35}
        alt="Settings Button"
        onClick={() => setOpen((previousState) => !previousState)}
      />

      <StyledSettingsControls showing={open}>
        <p>ADHD Mode?</p>
        <StyledSwitch>
          <p>{!isADHDMode && 'Off'}</p>
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
            }}
          />
        </StyledThemeButtons>

      </StyledSettingsControls>

    </StyledSettingsContainer>
  );
}

export default Settings;
