import styled from "styled-components";
import Button from "@mui/material/Button";

export const TargetSavingsSummaryContainer = styled.div`
  && {
    .summary-list .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .row .name {
      color: #808080;
      text-transform: uppercase;
      font-size: 10px;
    }
  }
`;

export const SelectCardButton = styled(Button)`
  && {
    background-color: #ebf3ff;
    border: 1px solid #d2e3ff;
    color: #263959;
    text-transform: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &&:hover {
    background-color: #ebf3ff;
    border: 1px solid #d2e3ff;
    
  }
`;
