import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data - replace with real sensor data
const mockData = {
  labels: Array.from({ length: 12 }, (_, i) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (11 - i) * 5);
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }),
  datasets: [
    {
      label: 'Flame Sensor',
      data: [5, 8, 12, 15, 25, 30, 45, 40, 35, 28, 20, 15],
      borderColor: 'rgb(255, 107, 107)',
      backgroundColor: 'rgba(255, 107, 107, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Smoke Sensor',
      data: [20, 22, 25, 30, 35, 40, 38, 35, 30, 28, 25, 22],
      borderColor: 'rgb(79, 195, 247)',
      backgroundColor: 'rgba(79, 195, 247, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Temperature (°C)',
      data: [24, 25, 26, 28, 32, 35, 38, 36, 34, 31, 29, 27],
      borderColor: 'rgb(255, 167, 38)',
      backgroundColor: 'rgba(255, 167, 38, 0.1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
          weight: 500,
        },
      },
    },
    title: {
      display: true,
      text: 'Real-time Sensor Readings',
      font: {
        size: 16,
        weight: 600,
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 11,
        },
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 50,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        font: {
          size: 11,
        },
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
  elements: {
    point: {
      radius: 3,
      hoverRadius: 6,
    },
  },
};

function SensorData() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Real-time Sensor Readings
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Line options={options} data={mockData} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SensorData;