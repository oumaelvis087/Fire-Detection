import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import MapComponent from '../components/MapComponent';

const MapViewContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const MapViewItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  height: '600px',
}));

const MapView = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <MapViewContainer maxWidth="lg">
        <MapViewItem>
          <MapComponent />
        </MapViewItem>
      </MapViewContainer>
    </Box>
  );
};

export default MapView;