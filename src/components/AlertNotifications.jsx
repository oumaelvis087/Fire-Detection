import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const AlertTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 400,
  '& .MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  '& .high-severity': {
    backgroundColor: theme.palette.error.light,
    '& .MuiTableCell-root': {
      color: theme.palette.error.dark,
      fontWeight: 500,
    },
  },
  '& .medium-severity': {
    backgroundColor: theme.palette.warning.light,
    '& .MuiTableCell-root': {
      color: theme.palette.warning.dark,
      fontWeight: 500,
    },
  },
  '& .low-severity': {
    backgroundColor: theme.palette.success.light,
    '& .MuiTableCell-root': {
      color: theme.palette.success.dark,
      fontWeight: 500,
    },
  },
  '& .MuiTableRow-root:hover': {
    backgroundColor: `${theme.palette.action.hover} !important`,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
}));

// Mock data - replace with real alert data
const mockAlerts = [
  {
    id: 1,
    timestamp: '2023-12-10 14:30:00',
    type: 'Fire Detected',
    location: 'Building A, Floor 2',
    severity: 'high',
    status: 'Active',
  },
  {
    id: 2,
    timestamp: '2023-12-10 14:25:00',
    type: 'Smoke Detected',
    location: 'Building B, Floor 1',
    severity: 'medium',
    status: 'Investigating',
  },
  {
    id: 3,
    timestamp: '2023-12-10 14:20:00',
    type: 'System Warning',
    location: 'Building C, Floor 3',
    severity: 'low',
    status: 'Resolved',
  },
];

function AlertNotifications() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Alerts
      </Typography>
      <AlertTableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockAlerts.map((alert) => (
              <TableRow key={alert.id} className={`${alert.severity}-severity`}>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell>{alert.type}</TableCell>
                <TableCell>{alert.location}</TableCell>
                <TableCell>{alert.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </AlertTableContainer>
    </Box>
  );
}

export default AlertNotifications;