import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
      light: '#4A5D80',
      dark: '#1A2438',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF9999',
      dark: '#CC4444',
    },
    error: {
      main: '#FF3D00',
      light: '#FF7539',
      dark: '#C30000',
    },
    warning: {
      main: '#FFA000',
      light: '#FFC107',
      dark: '#FF8F00',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E3B55',
      secondary: '#637381',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      color: '#2E3B55',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);