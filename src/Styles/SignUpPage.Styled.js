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

  &&#target-savings-container {
    height: auto;

   padding: 0;

    #signup-title-mobile {
      display: none;
    }

    #signup-title-desktop {
      display: none;
      margin-bottom: 1rem;
      width: 80%;
    }

    .target-savings-lead-desktop {
      font-size: 1.2rem;
    }

    .target-savings-lead-mobile {
      font-size: 1rem;
        @media screen and (min-width: 901px){
        display: none;
      }
    }

    @media screen and (min-width: 901px) {
      padding: 0.5rem 0;
      #target-savings-grid {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      #signup-form {
        text-align: right;
      }

      #signup-title-desktop {
        display: block;
      }

      .MuiButton-root {
        max-width: 132px;
      }
    }

    @media screen and (max-width: 900px) {
      #signup-title-mobile {
        display: block;
        font-size: 1.6rem;
        padding: 0rem;
      }
    }
  }
`;
