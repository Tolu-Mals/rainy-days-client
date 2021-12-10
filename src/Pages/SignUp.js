import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledBrand } from "../Styles/Brand.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed_password, setConfirmedPassword] = useState("");

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <StyledBrand item xs={12}>
            <img src="Assets/logo.svg" alt="Logo" />
          </StyledBrand>
          <FormContainer item xs={12} sm={6}>
            <Typography
              variant="h4"
              className="signup-title"
              component="h1"
              color="textPrimary"
            >
              Let's create your new account
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
            >CONTINUE</Button>
          </FormContainer>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
