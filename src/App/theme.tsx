import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#94C720'
    },
    warning: {
      main: '#C70D38'
    }
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
      '@media (max-width:768px)': {
        fontSize: '36px'
      }
    },
    h5: {
      fontSize: '24px',
      fontWeight: 'bold',
      '@media (max-width:768px)': {
        fontSize: '18px'
      }
    },
    body1: {
      fontSize: '16px',
      fontWeight: 'normal'
    }
  }
});
