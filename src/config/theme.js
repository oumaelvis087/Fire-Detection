import { createTheme } from '@mui/material/styles';

// Kenyan-inspired color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#E31C23', // Red from Kenyan flag
      light: '#FF4B4F',
      dark: '#B30000',
    },
    secondary: {
      main: '#006B3F', // Green from Kenyan flag
      light: '#3C9A6F',
      dark: '#004025',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    error: {
      main: '#FF3D00',
      light: '#FF9E80',
      dark: '#DD2C00',
    },
    warning: {
      main: '#FFA000',
      light: '#FFD54F',
      dark: '#FF6F00',
    },
    success: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;