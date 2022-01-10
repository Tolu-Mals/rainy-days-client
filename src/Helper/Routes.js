import React, { useContext } from "react";
import SignUp from "../Pages/Auth/SignUp";
import SignIn from "../Pages/Auth/SignIn";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import PasswordReset from "../Pages/Auth/PasswordReset";
import { Switch, Route } from "react-router-dom";
import AccountConfirmed from "../Pages/Auth/AccountConfirmed";
import SiteConstruction from "../Pages/SiteConstruction";
import Dashboard from "../Pages/Dashboard";
import { AuthContext } from "../Contexts/AuthContext";

import DashboardHome from "../Pages/DashboardHome";
import Products from "../Pages/Products";

const Routes = () => {
  const { auth_state } = useContext(AuthContext);

  const GuestRoutes = () => (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/forgot/:id/:token">
        <PasswordReset />
      </Route>

      <Route path="/forgot">
        <ForgotPassword />
      </Route>

      <Route path="/confirm">
        <AccountConfirmed />
      </Route>
    </Switch>
  );

  const AuthRoutes = () => (
    <Switch>
      <Route path="/construction">
        <SiteConstruction />
      </Route>
      <Route path="/dashboard">
        <Dashboard>
          <Switch>
            <Route path="/dashboard/products">
              <Products />
            </Route>
            <Route exact path="/dashboard">
              <DashboardHome />
            </Route>
          </Switch>
        </Dashboard>
      </Route>
    </Switch>
  );

  return auth_state.isAuthenticated ? <AuthRoutes /> : <GuestRoutes />;
};

export default Routes;
