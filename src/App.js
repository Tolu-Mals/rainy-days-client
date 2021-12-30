import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AuthContextProvider from "./Contexts/AuthContext";
import ErrorContextProvider from "./Contexts/ErrorContext";
import Routes from "./Helper/Routes";

import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ['"Hind Madurai"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0000A7",
    },
    secondary: {
      main: "#97EA70",
      contrastText: "#fff",
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
