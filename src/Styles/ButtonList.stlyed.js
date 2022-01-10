import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";

export const BoxButtonList = styled.div`
  && {
    .MuiButtonBase-root {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    && {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      .MuiButtonBase-root {
        width: 32%;
      }
    }
  }
`;

export const BoxButton = styled(ButtonBase)`
  && {
    background-color: #babadd;
    height: 150px;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(55, 121, 220, 0.1);
  }

  &&#new {
    border: 1px solid #d2e3ff;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #3779dc;

    svg {
      margin-bottom: 0.5rem;
    }
  }

  &&#new:hover {
    background-color: #e6f7f9;
  }
`;
