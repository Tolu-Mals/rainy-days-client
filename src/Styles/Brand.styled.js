import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const StyledBrand = styled(Grid)`
  && {
    @media screen and (max-width: 900px) {
      text-align: center;
      img {
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
    }

    && {
      @media screen and (min-width: 900px) {
        display: none;
      }
    }
  }
`;

export const BrandPattern = styled(Grid)`
  && {
    background: #0000a7 url('./assets/pattern.svg');
    height: 100%;
    justify-content: center;
    align-items: center;  

    img {
      display: block;
      margin: auto;
      margin-top: 50%;
      margin-bottom: 50%;
    }

    @media screen and (max-width: 900px){
      display: none;
    }
  }
`;

