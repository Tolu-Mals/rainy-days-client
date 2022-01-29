import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import ResponsiveDrawer from "../Components/ResponsiveDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { deepPurple } from "@mui/material/colors";

import { AuthContext } from "../Contexts/AuthContext";

import { Layout } from "../Styles/Layout.styled";



const Dashboard = ({ children }) => {
  const { auth_state } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [n_anchorEl, n_setAnchorEl] = React.useState(null);
  const n_isMenuOpen = Boolean(n_anchorEl);

  let location = useLocation();

  const navTitle = () => {
    switch(location.pathname){
      case "/dashboard":
        return auth_state.user.first_name ? `Hello ${auth_state.user.first_name}`:"Hello User";
      case "/dashboard/":
          return auth_state.user.first_name ? `Hello ${auth_state.user.first_name}`:"Hello User";
      case "/dashboard/contributions":
          return "Contributions";
      case "/dashboard/products/target":
        return "Target Savings";
      case "/dashboard/products/target/new":
        return "Target Savings";
      case "/dashboard/products/target/summary":
        return "Target Savings";
      case "/dashboard/products/rotational":
          return "Rotational Savings";
      case "/dashboard/products/loans":
        return "Loans"
      default:
        return ""
    }
  }


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
      <MenuItem onClick={handleMenuClose}>No new notification</MenuItem>
    </Menu>
  );

  return (
    <>
      <Layout>
        <ResponsiveDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
        <div className="mainApp">
          <AppBar
            className="appbar"
            elevation={0}
            position="static"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
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
                {auth_state.user.first_name ? `Hello ${auth_state.user.first_name}`:"Hello User"}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="contained"
                  endIcon={<AddCircleOutlineIcon />}
                  disableElevation
                  color="secondary"
                  sx={{
                    marginRight: 2,
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
                  sx={{
                    width: 64,
                    height: 64,
                  }}
                >
                  {/* <Badge badgeContent={4} color="error">
                  <NotificationsNoneOutlinedIcon />
                </Badge> */}
                  <NotificationsNoneOutlinedIcon />
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
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {auth_state.user.email.slice(0, 1).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Box>
            </Toolbar>
            <Toolbar>
              <Typography
                variant="h6"
                component="p"
                sx={{ display: { xs: "block", md: "none" }, color: "#263959" }}
              >
                {auth_state.user.first_name ? `Hello ${auth_state.user.first_name}`:"Hello User"}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="contained"
                endIcon={<AddCircleOutlineIcon />}
                disableElevation
                color="secondary"
                size="medium"
              >
                QUICK SAVE
              </Button>
            </Toolbar>
          </AppBar>

          <AppBar
            className="appbar"
            elevation={0}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
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
                variant="h5"
                component="p"
                sx={{ display: { xs: "none", md: "block" }, color: "#263959" }}
              >
              { navTitle() }
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="contained"
                  endIcon={<AddCircleOutlineIcon />}
                  disableElevation
                  color="secondary"
                  sx={{
                    marginRight: 2,
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
                  sx={{
                    width: 64,
                    height: 64,
                  }}
                >
                  {/* <Badge badgeContent={4} color="error">
                  <NotificationsNoneOutlinedIcon />
                </Badge> */}
                  <NotificationsNoneOutlinedIcon />
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
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                    {auth_state.user.email.slice(0, 1).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          <Container>
            <div className="space"></div>
            { children }
          </Container>

          {renderProfileOptions}
          {renderNotifications}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
