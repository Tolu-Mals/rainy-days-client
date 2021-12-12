import styled from "styled-components";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const FormContainer = styled(Grid)`
  && {

    text-align: left;
    align-items: center;
    justify-content: center;
    width: 80%;
    
    @media screen and (max-width: 900px) {
      text-align: center;

      #signup-title {
        margin-bottom: 2rem;
      }
      .MuiGrid-container {
        justify-content: center;
      }
    }
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      background-color: #f4f8ff;
      border-color: #d2e3ff;
      margin-bottom: 1rem;
    }

    .MuiOutlinedInput-root fieldset {
      border-color: #d2e3ff;
    }

    .Mui-focused,
    .Mui-focused fieldset {
      border-color: #3f69ae;
    }
  }
`;
