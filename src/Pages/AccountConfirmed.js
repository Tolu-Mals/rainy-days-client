import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import check from '../Assets/check.svg';

import { StyledAccountConfirmation } from "../Styles/AccountConfirmed.Styled";

const AccountConfirmed = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  }
  
  return (
    <StyledAccountConfirmation>
      <Container maxWidth="xs" id="confirmation-container">
        <img src={check} alt="check icon" id="check_icon" />
        <Typography variant="h4" component="h1">
          Account Confirmed
        </Typography>
        <Typography variant="body1" component="p">
          Kindly log into your account
        </Typography>
        <Button 
        variant="contained" 
        disableElevation 
        color="primary"
        size="large"
        onClick={() => handleLogin()}
        >
          Log In    
        </Button>
      </Container>
    </StyledAccountConfirmation>
  );
};

export default AccountConfirmed;
