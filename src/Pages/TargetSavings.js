import React, { useState, useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";

import { BoxButtonList, BoxButton } from "../Styles/ButtonList.stlyed";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

import { ErrorContext } from "../Contexts/ErrorContext";

const TargetSavings = () => {
  const [targetSavingsName, setTargetSavingsName] = useState("");
  const [targetSavingsAmount, setTargetSavingsAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { err_state, err_dispatch } = useContext(ErrorContext);

  const history = useHistory();

  const newTargetSavings = () => {
    history.push("target/new");
  };

  return (
    <div className="container">
      <Switch>
        <Route exact path="/dashboard/products/target">
          <BoxButtonList>
            <BoxButton id="new" onClick={newTargetSavings}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.8318 0 0 5.8318 0 13C0 20.1682 5.8318 26 13 26C20.1682 26 26 20.1682 26 13C26 5.8318 20.1682 0 13 0ZM13 24.5556C6.62827 24.5556 1.44444 19.3717 1.44444 13C1.44444 6.62827 6.62827 1.44444 13 1.44444C19.3717 1.44444 24.5556 6.62827 24.5556 13C24.5556 19.3717 19.3717 24.5556 13 24.5556Z"
                  fill="#3779DC"
                />
                <path
                  d="M17.3342 12.2786H13.7231V8.66753C13.7231 8.26858 13.3998 7.94531 13.0009 7.94531C12.6019 7.94531 12.2786 8.26858 12.2786 8.66753V12.2786H8.66753C8.26858 12.2786 7.94531 12.6019 7.94531 13.0009C7.94531 13.3998 8.26858 13.7231 8.66753 13.7231H12.2786V17.3342C12.2786 17.7332 12.6019 18.0564 13.0009 18.0564C13.3998 18.0564 13.7231 17.7332 13.7231 17.3342V13.7231H17.3342C17.7332 13.7231 18.0564 13.3998 18.0564 13.0009C18.0564 12.6019 17.7332 12.2786 17.3342 12.2786Z"
                  fill="#3779DC"
                />
              </svg>
              Create new target savings
            </BoxButton>
            <BoxButton className="target-saving target-saving-blue">
              <div>
                <div className="name">University Tuition</div>
                <Chip label="2.5% interest" color="primary" className="pill" />
              </div>
              <div className="amount">N200,000</div>
              <div className="frequency">N20,000 Per Month</div>
            </BoxButton>
            <BoxButton className="target-saving target-saving-gold">
              <div>
                <div className="name">House Rent</div>
                <Chip label="2.5% interest" color="primary" className="pill" />
              </div>
              <div className="amount">N500,000</div>
              <div className="frequency">N50,000 Per Month</div>
            </BoxButton>
          </BoxButtonList>
        </Route>
        <Route path="/dashboard/products/target/new">
          <div>
            <SignUpContainer container id="target-savings-container">
              <FormContainer item xs={12} md={12} id="target-savings-grid">
                <div className="title-group">
                  <Typography
                    id="signup-title-desktop"
                    variant="h4"
                    component="h1"
                    color="textPrimary"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    Let's set up a new target savings for you
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    id="signup-title-desktop"
                    className="target-savings-lead-desktop"
                  >
                    Set an amount you plan to save regularly, how frequently and
                    for how long
                  </Typography>
                </div>
                <form id="signup-form">
                  <div>
                    <Typography
                      id="signup-title-mobile"
                      component="h1"
                      color="textPrimary"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      Let's set up a new target savings for you
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      className="target-savings-lead-mobile"
                    >
                      Set an amount you plan to save regularly, how frequently
                      and for how long
                    </Typography>
                  </div>

                  {error && (
                    <Alert
                      severity="error"
                      sx={{
                        marginBottom: "1rem",
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  {err_state.msg && (
                    <Alert
                      severity="error"
                      sx={{
                        marginBottom: "0.5rem",
                      }}
                    >
                      {err_state.msg}
                    </Alert>
                  )}

                  <StyledTextField
                    required
                    fullWidth
                    id="target-savings-name"
                    placeholder="Savings Name"
                    onChange={(e) => setTargetSavingsName(e.target.value)}
                    value={targetSavingsName}
                    variant="outlined"
                    className="input"
                  />

                  <StyledTextField
                    required
                    fullWidth
                    id="target-savings-amount"
                    placeholder="Amount"
                    onChange={(e) => setTargetSavingsAmount(e.target.value)}
                    value={targetSavingsAmount}
                    type="number"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    variant="outlined"
                    className="input"
                  />

                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      textAlign: "left",
                      marginBottom: "0.5rem",
                    }}
                  >
                    How frequently do you want to save?
                  </Typography>

                  <StyledTextField
                    id="target-savings-frequency"
                    select
                    label="Frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    variant="outlined"
                    fullWidth
                    className="input"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </StyledTextField>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack
                      spacing={3}
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{
                          display: { xs: "none", md: "block" },
                        }}
                      />

                      <DesktopDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{
                          display: { xs: "none", md: "block" },
                          marginBottom: '1rem'
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack
                      spacing={3}
                      sx={{
                        display: { xs: "flex", md: "none" },
                      }}
                    >
                      <MobileDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{
                          width: "100%",
                        }}
                      />

                      <MobileDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>

                  {isLoading ? (
                    <LoadingButton
                      variant="contained"
                      fullWidth
                      disableElevation
                      loading
                      color="primary"
                      size="large"
                      sx={{
                        marginBottom: "1rem",
                        marginTop: "1rem",

                      }}
                    >
                      NEXT
                    </LoadingButton>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      disableElevation
                      color="primary"
                      size="large"
                      sx={{
                        marginBottom: "1rem",
                        marginTop: "1rem",
                      }}
                    >
                      NEXT
                    </Button>
                  )}
                </form>
              </FormContainer>
            </SignUpContainer>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default TargetSavings;
