import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledBrand, BrandPattern } from "../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <SignUpContainer container>
        <StyledBrand item xs={12}>
          <img src="Assets/logo.svg" alt="Logo" />
        </StyledBrand>
        <BrandPattern item md={5}>
          <img src="./assets/logo_light.svg" alt="logo" id="pattern_logo" />
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

            <Button
              variant="contained"
              fullWidth
              disableElevation
              color="primary"
              size="large"
              sx={{
                  marginBottom: '1rem'
              }}
            >
              SIGN IN
            </Button>
            
            <div className="tasks">
              <a href="#">Forgotten Password</a>
              <p>
                New here? <a href="#">Sign Up</a>
              </p>
            </div>
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default SignIn;
