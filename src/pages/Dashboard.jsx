import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SensorData from '../components/SensorData';
import AlertNotifications from '../components/AlertNotifications';
import MapComponent from '../components/MapComponent';

const DashboardContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const DashboardItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  height: '100%',
}));

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <DashboardContainer maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <DashboardItem>
              <SensorData />
            </DashboardItem>
          </Grid>

          <Grid item xs={12} md={4}>
            <DashboardItem>
              <AlertNotifications />
            </DashboardItem>
          </Grid>

          <Grid item xs={12}>
            <DashboardItem sx={{ height: '500px' }}>
              <MapComponent />
            </DashboardItem>
          </Grid>
        </Grid>
      </DashboardContainer>
    </Box>
  );
};

export default Dashboard;