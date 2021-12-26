import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";


import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";

import { StyledBrand, BrandPattern } from "../../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../../Styles/FormContainer.styled";
import { SignUpContainer } from "../../Styles/SignUpPage.Styled";

import { ErrorContext } from "../../Contexts/ErrorContext";
import { AuthContext } from "../../Contexts/AuthContext";

import logo from "../../Assets/logo.svg";
import logo_light from "../../Assets/logo_light.svg";
import pattern from "../../Assets/pattern.svg";

import axios from "axios";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const { err_state, err_dispatch } = useContext(ErrorContext);
  const { auth_state, auth_dispatch } = useContext(AuthContext);

  const { id, token } = useParams();
  const history = useHistory();

  const handlePasswordReset = (e) => {
    e.preventDefault();

    setIsLoading(true);


    if(!password || !confirmed_password){
      setIsLoading(false);
      return setError("Please enter all fields");
    }

    if (password !== confirmed_password) {
      setIsLoading(false);
      return setError("Password is different from confirmed password");
    }

    if (!/^(?=.*?[A-Za-z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/gm.test(password)) {
      setIsLoading(false);
      return setError(
        "Password must be up to 6 characters and must contain one symbol"
      );
    }

    resetPassword();

  };

  const resetPassword = () => {

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const body = JSON.stringify({ password });

    axios.post(`https://rainy-days-savers.herokuapp.com/forgot/reset/${id}/${token}`, body, config)
    .then((res) => {
      setIsLoading(false);
      setIsPasswordReset(true);
      setError("");
      setPassword("");
      setConfirmedPassword("");
      setTimeout(() => {
        history.push("/");
      }, 3000);
    })
    .catch((err) => {
      setError(err.message)
      setIsLoading(false);
    })
  }
 

  return (
    <div>
      <SignUpContainer container>
        <StyledBrand item xs={12}>
          <Link to="/">
            <img src={logo} alt="Logo" id="brand" />
          </Link>
        </StyledBrand>
        <BrandPattern item md={5} bg={pattern}>
          <img src={logo_light} alt="logo" id="pattern_logo" />
        </BrandPattern>
        <FormContainer item xs={12} md={7}>
          <form id="signup-form">
            <Typography
              variant="h4"
              id="signup-title"
              component="h1"
              color="textPrimary"
            >
             Set a new password
            </Typography>

            {isPasswordReset && (
              <Alert
                severity="success"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Password has been changed
              </Alert>
            )}
           
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
                  marginBottom: "1rem",
                }}
              >
                {err_state.msg}
              </Alert>
            )}
        
            <StyledTextField
              required
              fullWidth
              id="password"
              placeholder="Set Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              type="password"
              className="input"
            />

            <StyledTextField
              required
              fullWidth
              id="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmedPassword(e.target.value)}
              value={confirmed_password}
              variant="outlined"
              type="password"
            />

            {isLoading ? (
              <LoadingButton
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                size="large"
                loading
                onClick={(e) => handlePasswordReset(e)}
              >
                CONTINUE
              </LoadingButton>
            ) : (
              <Button
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                size="large"
                onClick={(e) => handlePasswordReset(e)}
              >
                CONTINUE
              </Button>
            )}
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default PasswordReset;
