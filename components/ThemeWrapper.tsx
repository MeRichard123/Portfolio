import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import {
  LightTheme, DarkTheme, GreenTheme, PinkTheme, PrideTheme, AppTheme,
} from '../lib/themes';
import { RootState } from '../store/store';
import { Theme } from '../store/settingsSlice';
import styled from '@emotion/styled';

interface WrapperProps {
  children: any;
}

interface FontsProps {
  isAdhd: boolean;
}

const Fonts = styled.div<FontsProps>`
  font-family: ${props => props.isAdhd ? 'Lora' : ''}, serif !important;
`;

function ThemeWrapper({ children }: WrapperProps) {
  const theme = useSelector((state: RootState) => state.settings.theme);
  const isADHDMode = useSelector((state: RootState) => state.settings.ADHDMode);
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(LightTheme);

  // gosh isn't it beautiful
  useEffect(() => {
    switch (theme) {
      case Theme.LightMode:
        setCurrentTheme(LightTheme);
        break;
      case Theme.DarkMode:
        setCurrentTheme(DarkTheme);
        break;
      case Theme.PinkMode:
        setCurrentTheme(PinkTheme);
        break;
      case Theme.GreenMode:
        setCurrentTheme(GreenTheme);
        break;
      case Theme.PrideMode:
        setCurrentTheme(PrideTheme);
        break;
      default:
        setCurrentTheme(LightTheme);
        break;
    }
  }, [theme]);
  return (
    <ThemeProvider theme={currentTheme}>
      <Fonts isAdhd={isADHDMode}>
        {children}
      </Fonts>
    </ThemeProvider>
  );
}

export default ThemeWrapper;
