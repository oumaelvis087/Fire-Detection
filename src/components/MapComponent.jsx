import React, { useState, useEffect } from 'react';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Thika, Kenya coordinates
const THIKA_COORDINATES = [-1.0289685942233648, 37.0183639092255];

// Mock incident data - replace with real data
const mockIncidents = [
  {
    id: 1,
    position: [-1.0275740701703895, 37.01754851772846],
    title: 'Fire Incident #1',
    description: 'Active fire in Building A',
    severity: 'high',
  },
  {
    id: 2,
    position: [-1.0300842130268615, 37.01697988944762],
    title: 'Fire Incident #2',
    description: 'Smoke detected in Building B',
    severity: 'medium',
  },
];

// Custom icons for different severity levels
const createIcon = (severity) => {
  const iconColors = {
    high: '#FF3D00',
    medium: '#FFA000',
    low: '#4CAF50',
  };

  return new L.DivIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${iconColors[severity]};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

const severityIcons = {
  high: createIcon('high'),
  medium: createIcon('medium'),
  low: createIcon('low'),
};

// Custom user location marker icon
const userLocationIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <div style="
      background-color: #2196F3;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
      "></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Component to handle map center updates
function MapUpdater({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

function MapComponent() {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [center, setCenter] = useState(THIKA_COORDINATES);

  useEffect(() => {
    // Request user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setCenter([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location. Showing default view of Thika.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Showing default view of Thika.');
    }
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Incident Map
      </Typography>
      <Box sx={{ height: '500px', width: '100%', borderRadius: 1, overflow: 'hidden' }}>
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <MapUpdater center={center} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {userLocation && (
            <Marker position={userLocation} icon={userLocationIcon}>
              <Popup>
                <div style={{ padding: '8px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#2E3B55', fontSize: '16px' }}>
                    Your Location
                  </h3>
                </div>
              </Popup>
            </Marker>
          )}
          {mockIncidents.map((incident) => (
            <Marker
              key={incident.id}
              position={incident.position}
              icon={severityIcons[incident.severity]}
            >
              <Popup>
                <div style={{
                  padding: '8px',
                  minWidth: '200px',
                }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    color: '#2E3B55',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}>{incident.title}</h3>
                  <p style={{
                    margin: '4px 0',
                    color: '#637381',
                    fontSize: '14px',
                  }}>{incident.description}</p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '8px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: incident.severity === 'high' ? '#FFE9E7' :
                      incident.severity === 'medium' ? '#FFF4E5' : '#E8F5E9',
                    color: incident.severity === 'high' ? '#C30000' :
                      incident.severity === 'medium' ? '#FF8F00' : '#388E3C',
                    fontSize: '12px',
                    fontWeight: 500,
                  }}>
                    Severity: {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="info" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MapComponent;

