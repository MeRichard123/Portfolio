/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line no-shadow
export enum Theme {
    LightMode,
    DarkMode
}

export interface SettingsStateType {
    ADHDMode: boolean;
    theme: Theme;
}

const initialState: SettingsStateType = {
  ADHDMode: false,
  theme: Theme.LightMode,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleADHDMode: (state) => {
      state.ADHDMode = !state.ADHDMode;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleADHDMode, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
