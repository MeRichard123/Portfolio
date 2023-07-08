import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import {
  LightTheme, DarkTheme, GreenTheme, PinkTheme, PrideTheme, AppTheme,
} from '../lib/themes';
import { RootState } from '../store/store';
import { Theme } from '../store/settingsSlice';

interface WrapperProps {
    children: any;
}

function ThemeWrapper({ children }: WrapperProps) {
  const theme = useSelector((state: RootState) => state.settings.theme);
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(LightTheme);

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
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
