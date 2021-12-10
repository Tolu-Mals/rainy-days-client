import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const StyledBrand = styled(Grid)`
  && {
    @media screen and (max-width: 768px) {
      text-align: center;
      img {
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }

    && {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;
