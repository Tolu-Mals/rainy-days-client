import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { StyledAccountConfirmation } from "../Styles/AccountConfirmed.Styled";
import { AuthContext } from "../Contexts/AuthContext";

import construction from '../Assets/construction.svg';

const SiteConstruction = () => {
  const navigate = useNavigate();

  const { auth_state, auth_dispatch } = useContext(AuthContext);
  
  return (
    <StyledAccountConfirmation>
      <Container maxWidth="sm" id="confirmation-container">
        <img src={construction} alt="check icon" id="construction_icon"/>
        <Typography variant="h6" component="h1">
         Hello, { auth_state?.user?.email }
        </Typography>
        <Typography variant="body1" component="p">
          We're getting things ready for you. Kindly check back later.
        </Typography>
      </Container>
    </StyledAccountConfirmation>
  );
};

export default SiteConstruction;
