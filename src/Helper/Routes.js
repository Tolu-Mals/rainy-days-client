import React, { useContext } from "react";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PasswordReset from "../Pages/PasswordReset";
import { Switch, Route } from "react-router-dom";
import AccountConfirmed from "../Pages/AccountConfirmed";
import SiteConstruction from "../Pages/SiteConstruction";
import { AuthContext } from "../Contexts/AuthContext";

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

      <Route path="/forgot">
        <PasswordReset />
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
    </Switch>
  );

  return auth_state.isAuthenticated ? <AuthRoutes /> : <GuestRoutes />;
};

export default Routes;
