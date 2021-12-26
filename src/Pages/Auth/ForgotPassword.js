import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";

import { StyledBrand, BrandPattern } from "../../Styles/Brand.styled";
import {
  FormContainer,
  StyledTextField,
} from "../../Styles/FormContainer.styled";
import { SignUpContainer } from "../../Styles/SignUpPage.Styled";

import logo from "../../Assets/logo.svg";
import logo_light from "../../Assets/logo_light.svg";
import pattern from "../../Assets/pattern.svg";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email) {
      setIsLoading(false);
      setError("Enter your email");
    }

    sendMail();
  };

  const sendMail = () => {
    const body = JSON.stringify({ email });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("https://rainy-days-savers.herokuapp.com/api/forgot", body, config)
      .then((res) => {
        setIsLoading(false);
        setIsMailSent(true);
        setEmail("");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.msg);
        throw err;
      });
  };

  return (
    <div>
      <SignUpContainer container>
        <StyledBrand item xs={12}>
          <img src={logo} alt="Logo" id="brand" />
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
              Let's get you back on track
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

            {isMailSent && (
              <Alert
                severity="success"
                sx={{
                  marginBottom: "1rem",
                }}
              >
                Check email and spam folder for password reset link
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

            {isLoading ? (
              <LoadingButton
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                size="large"
                loading
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
                sx={{
                  marginBottom: "1rem",
                }}
                onClick={(e) => handleClick(e)}
              >
                RESET PASSWORD
              </Button>
            )}
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default ForgotPassword;
