import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Notifications as NotificationsIcon,
  Map as MapIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Alerts', icon: <NotificationsIcon />, path: '/alerts' },
  { text: 'Map View', icon: <MapIcon />, path: '/map' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.contrastText' }}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemIcon sx={{ color: 'primary.contrastText' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </StyledDrawer>
    </>
  );
};

export default Sidebar;