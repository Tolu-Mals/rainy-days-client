import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { StyledBrand, BrandPattern } from "../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

import logo from "../Assets/logo.svg";
import logo_light from "../Assets/logo_light.svg";
import pattern from "../Assets/pattern.svg";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

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
              RESET PASSWORD
            </Button>
          </form>
        </FormContainer>
      </SignUpContainer>
    </div>
  );
};

export default PasswordReset;
