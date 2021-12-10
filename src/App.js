import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUp from "./Pages/SignUp";

const theme = createTheme({
  typography: {
    fontFamily: ['"Hind Madurai"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: '#0000A7',
    },
    text: {
      primary: '#002055'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignUp />
      </ThemeProvider>
    </div>
  );
}

export default App;
