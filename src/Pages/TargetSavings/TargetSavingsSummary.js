import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  TargetSavingsSummaryContainer,
  SelectCardButton,
} from "../../Styles/StyledTargetSavingSummary.styled";

const TargetSavingsSummary = () => {
  return (
    <TargetSavingsSummaryContainer className="target-savings">
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        component="div"
      >
        <Typography variant="h6">Take one more look</Typography>
        <Typography variant="body2">Review your plan before making a payment</Typography>
        
      </Box>
      <Box
        sx={{
          border: "1px solid #C3D6EE",
          p: 2,
          borderRadius: 2,
          mb: 1
        }}
        component="div"
      >
        <Typography
          variant="body1"
          component="h1"
          sx={{
            color: "#859CC2",
            mb: 2,
          }}
        >
          Target Savings Review
        </Typography>

        <hr id="x-line" />

        <div className="summary-list">
          <div className="row">
            <div className="detail">
              <div className="name">Savings Name</div>
              <div className="value">Japa Plans</div>
            </div>
            <div className="detail">
              <div className="name">Frequency</div>
              <div className="value">Monthly</div>
            </div>
          </div>
          <div className="row">
            <div className="detail">
              <div className="name">Amount</div>
              <div className="value">N100,000</div>
            </div>
            <div className="detail">
              <div className="name">Date</div>
              <div className="value">July 16, 2021</div>
            </div>
          </div>
          <div className="row">
            <div className="detail">
              <div className="name">Duration</div>
              <div className="value">6 months</div>
            </div>
            <div className="detail">
              <div className="name">Cashout Date</div>
              <div className="value">Dec 16, 2021</div>
            </div>
          </div>
        </div>

        <hr />
        <Typography
          variant="body2"
          sx={{
            mb: 1,
          }}
        >
          Select a card to use for your payment
        </Typography>
        <SelectCardButton
          variant="contained"
          disableRipples
          disableElevation
          fullWidth
          size="large"
        >
          Select Card
          <svg
            width="23"
            height="17"
            viewBox="0 0 23 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7.72959V13.6597C0 15.1717 1.22854 16.4002 2.74059 16.4002H19.7039C21.2159 16.4002 22.4444 15.1717 22.4444 13.6597V7.72959H0ZM17.9083 13.3998C17.4594 13.3998 17.0814 13.1871 16.8451 12.8564C16.6089 13.1871 16.2073 13.3998 15.782 13.3998C15.026 13.3998 14.4353 12.7855 14.4353 12.0531C14.4353 11.2971 15.0496 10.7064 15.782 10.7064C16.2309 10.7064 16.6089 10.9191 16.8451 11.2498C17.0814 10.9427 17.483 10.7064 17.9083 10.7064C18.6643 10.7064 19.255 11.3207 19.255 12.0531C19.255 12.7855 18.6407 13.3998 17.9083 13.3998ZM19.7039 0.240234H2.74059C1.22854 0.240234 0 1.46877 0 2.95719V4.58737H22.4444V2.95719C22.4444 1.46877 21.2159 0.240234 19.7039 0.240234Z"
              fill="#00A3FF"
            />
          </svg>
        </SelectCardButton>
      </Box>
      <Button variant="contained"
      fullWidth
      disableElevation
      size="large"
      >Make payment
      </Button>
    </TargetSavingsSummaryContainer>
  );
};

export default TargetSavingsSummary;
