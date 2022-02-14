import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom"

import Typography from "@mui/material/Typography";
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
import { FormContainer, StyledTextField } from "../../Styles/FormContainer.styled";
import { SignUpContainer } from "../../Styles/SignUpPage.Styled";

import { ErrorContext } from "../../Contexts/ErrorContext";

const NewTargetSavings = () => {
  const [targetSavingsName, setTargetSavingsName] = useState("");
  const [targetSavingsAmount, setTargetSavingsAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const { err_state, err_dispatch } = useContext(ErrorContext);
  const history = useHistory();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
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
              Set an amount you plan to save regularly, how frequently and for
              how long
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
                Set an amount you plan to save regularly, how frequently and for
                how long
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
                    marginBottom: "1rem",
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
                onClick={() => history.push("/dashboard/products/target/summary")}
              >
                NEXT
              </Button>
            )}
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default NewTargetSavings;