import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import MapView from './pages/MapView';
import theme from './config/theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/map" element={<MapView />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;