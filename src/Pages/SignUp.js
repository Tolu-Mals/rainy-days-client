import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";

import { StyledBrand, BrandPattern } from "../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

import { ErrorContext } from "../Contexts/ErrorContext";
import { AuthContext } from "../Contexts/AuthContext";

import logo from "../Assets/logo.svg";
import logo_light from "../Assets/logo_light.svg";
import pattern from "../Assets/pattern.svg";

import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { err_state, err_dispatch } = useContext(ErrorContext);
  const { auth_state, auth_dispatch } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmed_password) {
      return setError("Password is different from confirmed password");
    }

    if (!email || !password) {
      return setError("Please enter all fields");
    }

    if (!/^(?=.*?[A-Za-z0-9])(?=.*?[#?!@$%^&*-]).{6,}$/gm.test(password)) {
      return setError(
        "Password must be up to 6 characters and must contain one symbol"
      );
    }

    const user = {
      email,
      password,
    };

    signUp(user);
  };

  const signUp = ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axios
      .post("https://rainy-days-savers.herokuapp.com/api/users", body, config)
      .then((res) => {
        setError("");
        setIsMailSent(true);
        setEmail("");
        setPassword("");
        setConfirmedPassword("");
        err_dispatch({ type: "CLEAR_ERRORS" });
        setIsLoading(false);
      })
      .catch((err) => {
        auth_dispatch({ type: "REGISTER_FAIL" });
        err_dispatch({
          type: "GET_ERRORS",
          payload: {
            msg: err.response.data.msg,
            status: err.response.status,
            id: "REGISTER_FAIL",
          },
        });
        setIsLoading(false);
      });
  };

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
              Let's create your
              <br /> new account
            </Typography>
            {isMailSent && (
              <Alert
                severity="success"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Check email and spam folder for confirmation link
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
              id="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              className="input"
            />

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
                onClick={(e) => handleSignIn(e)}
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
                onClick={(e) => handleSignIn(e)}
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

export default SignUp;
