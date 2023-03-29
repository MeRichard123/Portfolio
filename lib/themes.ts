interface ColoursType{
  background: string;
  text: string;
  section: string;
  formBackground: string;
  linkColour: string;
  footerBackground: string;
}

export interface AppTheme {
  colours: ColoursType;
}

export const LightTheme: AppTheme = {
  colours: {
    background: '#fff',
    text: '#000',
    section: '#F6F6F6',
    formBackground: '#E0E0E0',
    linkColour: '#001a23',
    footerBackground: '#353535',
  },
};

export const DarkTheme: AppTheme = {
  colours: {
    background: '#000',
    text: '#fff',
    section: '#100D0D',
    formBackground: '#100D0D',
    linkColour: '#E5E5CB',
    footerBackground: '#000',
  },
};
