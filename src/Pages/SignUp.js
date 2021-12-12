import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledBrand, BrandPattern } from "../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmedPassword] = useState("");

  return (
    <div>
      <SignUpContainer container>
        <StyledBrand item xs={12}>
          <img src="Assets/logo.svg" alt="Logo" />
        </StyledBrand>
        <BrandPattern item md={5}>
          <img src="./assets/logo_light.svg" alt="logo" id="pattern_logo"/>
        </BrandPattern>
        <FormContainer item xs={12} md={7}>
          <form id="signup-form">
            <Typography
              variant="h4"
              id="signup-title"
              component="h1"
              color="textPrimary"
            >
              Let's create your<br/> new account
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

            <Button
              variant="contained"
              fullWidth
              disableElevation
              color="primary"
              size="large"
            >
              CONTINUE
            </Button>
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default SignUp;
