// components/DashboardLayout.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

interface DashboardLayoutProps {
  children: React.ReactNode;
  username: string;
}

const DashboardInstituteLayout: React.FC<DashboardLayoutProps> = ({ children, username }) => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Clear token or user data from localStorage or any state management you are using
    localStorage.removeItem('token');
    // Redirect to login page or root
    navigateTo('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Button 
            color="inherit" 
            startIcon={<ExitToAppIcon />} 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button onClick={() => navigateTo(`/institutedashboard/${username}`)}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => navigateTo(`/institutedashboard/${username}/profile`)}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={() => navigateTo(`/institutedashboard/${username}/courses`)}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button onClick={() => navigateTo(`/institutedashboard/${username}/professors`)}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Professors" />
          </ListItem>
          <ListItem button onClick={() => navigateTo(`/institutedashboard/${username}/students`)}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardInstituteLayout;
