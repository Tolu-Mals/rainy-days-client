import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const SignUpContainer = styled(Grid)`
  && {
    height: 100vh;
    align-items: center;

    #signup-form {
      width: 70%;
      margin: 0 auto;
    }

    #signup-title {
      margin-bottom: 2rem;
    }

    #pattern-logo {
      display: block;
      margin: auto;
    }

    .tasks {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media screen and (max-width: 900px) {
      padding: 1rem;

      #signup-form {
        width: 100%;
      }

      .tasks {
        display: block;
      }
    }
  }
`;
