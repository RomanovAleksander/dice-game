'use client';
import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
    },
    success: {
      main: 'rgba(46, 125, 50, 1)',
      contrastText: '#ffffff',
    },
    error: {
      main: 'rgba(211, 47, 47, 1)',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 10px 2px rgba(156, 39, 176, .4)',
          },
        },
      },
    },
  },
});

export default theme;