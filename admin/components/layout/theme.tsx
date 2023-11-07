import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4317EA',
      dark: '#11047A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#11047A',
    },
    error: {
      main: '#C03221',
    },
    background: {
      default: '#F4F7FE',
    },
    text: {
      primary: '#131721',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 16,
    body1: {
      marginTop: 12,
    },
    h1: {
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: -0.68,
    },
    h2: {
      color: '#2B3674',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.33,
      letterSpacing: -0.48
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.67,
      letterSpacing: -0.36
    },
    h6: {
      color: '#ADB5BD',
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.75,
      paddingBottom: "8px !important",
    }
  },
  shape: {
    borderRadius: 20,
  },
  shadows: [
    'none',
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)",
    "0px 10px 30px 0px rgba(17, 38, 146, 0.05)"
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          paddingTop: 11,
          paddingBottom: 11,
          paddingLeft: 31,
          paddingRight: 31,
          textTransform: 'none',
        }
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#4317EA',
            color: '#fff',
          }
        },
        {
          props: { variant: 'text', color: 'primary' },
          style: {
            color: '#4317EA',
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: '#fff'
          }
        },
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            color: '#fff',
          }
        },
      ]
    }
  }
});

