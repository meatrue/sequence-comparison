import { createTheme } from '@mui/material';

export const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: '#364CCE',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
        body {
          background: #F0F0F5;
          min-height: 100vh;
          overflow-y: scroll;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: 0.6,
          borderWidth: '2px',

          '&:hover': {
            borderWidth: '2px',
          },
        },
        sizeLarge: {
          padding: '10px 30px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});
