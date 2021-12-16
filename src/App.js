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

import AuthContextProvider from "./Contexts/AuthContext";
import ErrorContextProvider from "./Contexts/ErrorContext";
import Routes from "./Helper/Routes";

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


function App() {
  return (
    <div className="App">
      <ErrorContextProvider>
        <AuthContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </AuthContextProvider>
      </ErrorContextProvider>
    </div>
  );
}

export default App;
