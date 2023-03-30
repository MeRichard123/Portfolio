import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme{
        colours: {
            background: string;
            text: string;
            section: string;
            formBackground: string;
            linkColour: string;
            footerBackground: string;
        }
    }
}
