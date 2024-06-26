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
    section: '#232323',
    formBackground: '#100D0D',
    linkColour: '#f6f6f6',
    footerBackground: '#000',
  },
};

// that fact that is takes this many gradients to make a rainbow is kinda homophobic
// if the ESLint girlies could read they wouldn't be very happy.
export const PrideTheme: AppTheme = {
  colours: {
    // eslint-disable-next-line max-len
    background: 'linear-gradient(90deg, rgba(255,127,127,1) 0%, rgba(255,180,129,1) 25%, rgba(255,250,139,1) 50%, rgba(156,255,134,1) 76%, rgba(137,216,255,1) 100%);',
    text: '#000',
    section: '#F2B9B969',
    formBackground: '#F2B9B969',
    linkColour: '#0E0E0E',
    footerBackground: '#a26363',
  },
};
export const GreenTheme: AppTheme = {
  colours: {
    background: '#E8F1F2',
    text: '#001A23',
    section: '#88c08e',
    formBackground: '#88c08e',
    linkColour: '#001A23',
    footerBackground: '#31493C',
  },
};
export const PinkTheme: AppTheme = {
  colours: {
    background: '#fce5e5',
    text: '#000',
    section: '#f7c2c2',
    formBackground: '#ff7474',
    linkColour: '#541616',
    footerBackground: '#541616',
  },
};
