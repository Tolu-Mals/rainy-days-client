import styled from "styled-components";
import ButtonBase from "@mui/material/ButtonBase";

export const BoxButtonList = styled.div`
  && {
    .MuiButtonBase-root {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0 1rem;
    }

    .target-saving {
      display: flex;
      flex-direction: column;

      div {
        margin-bottom: 0.3rem;
      }
      .name {
        text-transform: uppercase;
        text-align: left;
        font-weight: 500;
      }

      .amount {
        width: 100%;
        font-size: 2.3rem;
        text-align: left;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .frequency {
        width: 100%;
        text-align: left;
        color: #859CC2;
      }
    }

    .target-saving > div:nth-child(1) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .MuiChip-root {
      border-radius: 4px;
    }

    .target-saving-blue {
      background-color:#EBF3FF;
      border: 1px solid #D2E3FF;

      .name {
        color: #3779DC;
      }

      .amount {
        color:#002055;
      }

      .MuiChip-root {
        background-color: #3E84ED;
      }
    }

    .target-saving-gold {
      background-color:#FFFCEB;
      border: 1px solid #fff0cb;

      .MuiChip-root {
        background-color: #f6d480;
      }

      .name {
        color: #3779DC;
      }

      .amount {
        color:#002055;
      }
    }
  }

  @media screen and (min-width: 768px) {
    && {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 0;

      .MuiButtonBase-root {
        width: 32%;
        margin-right: 1.3%;
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
