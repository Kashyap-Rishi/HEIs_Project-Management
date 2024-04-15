"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Button,
  Menu,
  MenuItem,
  Box,
  Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter(); // Initialize useRouter

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' }
  ];

  const loginItems = [
    { name: 'Institute', link: '/institutesignup' },
    { name: 'Professor', link: '/professorsignup' },
    { name: 'Student', link: '/studentsignup' }
  ].map(item => ({
    ...item,
    link: item.link || ''
  }));

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <Link href={item.link} passHref>
                      <ListItemButton onClick={handleDrawerToggle}>
                        <ListItemText primary={item.name} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                ))}
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLoginMenu}>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Menu
                id="menu-login-mobile"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLoginMenuClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {loginItems.map((item, index) => (
                  <MenuItem key={index} onClick={() => {
                    handleLoginMenuClose();
                    router.push(item.link); 
                  }}>
                      {item.name}
                  
                  </MenuItem>
                ))}
              </Menu>
            </Drawer>
          </>
        ) : (
          <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ position: 'absolute', left: 16 }}>
              My App
            </Typography>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => router.push(item.link)} 
                  sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-login"
              aria-haspopup="true"
              onClick={handleLoginMenu}
              sx={{ position: 'absolute', right: 16 }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-login"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLoginMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {loginItems.map((item, index) => (
                <MenuItem key={index} onClick={() => {
                  handleLoginMenuClose();
                  router.push(item.link);
                }}>
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
