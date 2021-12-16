import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import PasswordReset from "./Pages/PasswordReset";
import { Switch, Route } from "react-router-dom";
import AccountConfirmed from "./Pages/AccountConfirmed";
import SiteConstruction from "./Pages/SiteConstruction";
import { AuthContext } from "./Contexts/AuthContext";

const theme = createTheme({
  typography: {
    fontFamily: ['"Hind Madurai"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0000A7",
    },
    text: {
      primary: "#002055",
    },
  },
});

const GuestRouter = () => (
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

const AuthRouter = () => (
  <Switch>
    <Route path="/construction" component={<SiteConstruction />} />
  </Switch>
);

function App() {
  const { auth_state } = useContext(AuthContext);
  const AppRoutes = () =>
    auth_state.isAuthenticated ? <AuthRouter /> : <GuestRouter />;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
