import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";

import { StyledBrand, BrandPattern } from "../../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../../Styles/FormContainer.styled";
import { SignUpContainer } from "../../Styles/SignUpPage.Styled";

import { AuthContext } from "../../Contexts/AuthContext";
import { ErrorContext } from "../../Contexts/ErrorContext";

import logo from "../../Assets/logo.svg";
import logo_light from "../../Assets/logo_light.svg";
import pattern from "../../Assets/pattern.svg";

import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { auth_state, auth_dispatch } = useContext(AuthContext);
  const { err_state, err_dispatch } = useContext(ErrorContext);

  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setIsLoading(false);
      return setError("Please enter all fields");
    }

    const user = {
      email,
      password,
    };

    loginUser(user);
  };

  const loginUser = ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axios
      // .post("http://localhost:5000/api/auth", body, config)
      .post("https://rainy-days-savers.herokuapp.com/api/auth", body, config)
      .then((res) => {
        setIsLoading(false);
        auth_dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        err_dispatch({ type: "CLEAR_ERRORS" });
        history.push("/dashboard");
      })
      .catch((err) => {
        setIsLoading(false);
        auth_dispatch({ type: "LOGIN_FAIL" });
        err_dispatch({
          type: "GET_ERRORS",
          payload: {
            msg: err?.response?.data?.msg,
            status: err?.response?.status,
            id: "LOGIN_FAIL",
          },
        });
      });
  };

  useEffect(() => {
    if(auth_state.isAuthenticated){
      history.push("/dashboard");
    }
  }, [auth_state])

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
              Welcome, let's get
              <br /> right back in
            </Typography>

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
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              type="password"
              className="input"
            />

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
                }}
                onClick={(e) => handleSignIn(e)}
              >
                SIGN IN
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
                }}
                onClick={(e) => handleSignIn(e)}
              >
                SIGN IN
              </Button>
            )}

            <div className="tasks">
              <Link to="/forgot" alt="forgot password">
                Forgot Password
              </Link>
              <p>
                New here? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default SignIn;
