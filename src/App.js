import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import PasswordReset from "./Pages/PasswordReset";
import { Routes, Route } from "react-router-dom";
import AccountConfirmed from "./Pages/AccountConfirmed";
import SiteConstruction from "./Pages/SiteConstruction";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<PasswordReset />} />
          <Route path="/confirm" element={<AccountConfirmed />} />
          <Route path="/construction" element={<SiteConstruction />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
