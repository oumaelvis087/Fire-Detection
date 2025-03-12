import React from 'react';
import { Box, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AlertNotifications from '../components/AlertNotifications';

const AlertsContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const AlertsItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  height: '100%',
}));

const Alerts = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <AlertsContainer maxWidth="lg">
        <AlertsItem>
          <AlertNotifications />
        </AlertsItem>
      </AlertsContainer>
    </Box>
  );
};

export default Alerts;