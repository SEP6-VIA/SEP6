import { createTheme } from '@mui/material/styles';
import { Colors } from '../constants/Colors';

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        p: TypographyStyleOptions | undefined;
        h5r: TypographyStyleOptions | undefined;

    }

    interface TypographyOptions {
        p: TypographyStyleOptions | undefined;
        h5r: TypographyStyleOptions | undefined;
    }
}

declare module '@mui/material/Typography/Typography' {
    interface TypographyPropsVariantOverrides {
        p: true;
        h5r: true;


    }
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        //define custom breakpoints here like this:
        ultraWide: true;
        custom1234: true;
        custom522: true;

    }
}

const media = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 900,
            lg: 1200,
            xl: 1536,

            // custom breakpoints
            ultraWide: 2000,
            custom1234: 1234,
            custom522: 522,
        }
    }
})

export const theme = createTheme({
    ...media,
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: Colors.red1,
                    color: Colors.lightCyan,
                    borderRadius: '1.25rem',
                    fontSize: '3.1rem',
                    padding: '1.25 1.8rem',
                    transition: 'background-color 0.5s ease-in-out',
                    height: '5.9rem',
                    fontFamily: 'Rubik-ExtraBold',
                    '&:hover': {
                        backgroundColor: Colors.red2,
                        color: Colors.lightCyan,
                    },
                    [media.breakpoints.down('custom522')]: {
                        fontSize: '2.1rem',
                        height: '3.9rem',
                    }
                },

            },
        },
    },
    typography: {
        fontFamily: 'Rubik-ExtraBold',

        //thin: 300 bold: 800

        h1: {
            fontSize: '6.3rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '3.4rem'
            },
            [media.breakpoints.down('custom522')]: {
                fontSize: '2.4rem'
            }
        },
        h2: {
            fontSize: '4.5rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '2.75rem'
            }
        },
        h3: {
            fontSize: '3.1rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '2.1rem'
            }
        },
        h4: {
            fontSize: '2.25rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '1.75rem'
            }
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '1.4rem'
            }
        },
        h5r: {
            fontSize: '1.5rem',
            fontWeight: '300',
            lineHeight: 1.2,
            color: Colors.lightCyan,
            [media.breakpoints.down('sm')]: {
                fontSize: '1.4rem'
            }
        },
        h6: {
            fontSize: '1.1rem',
            fontWeight: '800',
            lineHeight: 1.2,
            color: Colors.lightCyan,
        },
        p: {
            fontSize: '1.1rem',
            color: Colors.lightCyan,
            lineHeight: '2rem'
        },
    },


});



export default theme;