import React from "react";
import ResponsiveDrawer from "../Components/ResponsiveDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircle from "@mui/icons-material/AccountCircle";



import { Layout } from "../Styles/Layout.styled";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [n_anchorEl, n_setAnchorEl] = React.useState(null);
  const n_isMenuOpen = Boolean(n_anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsOpen = (event) => {
    n_setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationsClose = () => {
    n_setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const notificationsId = "new-notifications";

  const renderProfileOptions = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderNotifications = (
    <Menu
      anchorEl={n_anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={notificationsId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={n_isMenuOpen}
      onClose={handleNotificationsClose}
    >
      <MenuItem onClick={handleMenuClose}>New Notification</MenuItem>
    </Menu>
  );

  return (
    <Layout>
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <div className="mainApp">
        <AppBar className="appbar" elevation={0}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              size="large"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="p"
              sx={{ display: { xs: "none", md: "block" }, color: "#263959" }}
            >
              Hello, Tolulope
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button 
              variant="contained" 
              endIcon={<AddCircleOutlineIcon />}
              disableElevation
              color="secondary"
              sx={{
                marginRight: 2
              }}
              >
                QUICK SAVE
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show new notifications"
                aria-controls={notificationsId}
                aria-haspopup="true"
                onClick={handleNotificationsOpen}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderProfileOptions}
        {renderNotifications}
      </div>
    </Layout>
  );
};

export default Dashboard;
