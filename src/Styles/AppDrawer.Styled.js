import styled from "styled-components";
import Drawer from "@mui/material/Drawer";

export const StyledAppDrawer = styled(Drawer)`
  && {
    #list-header {
      padding: 3rem 1rem;
    }

    @media screen and (max-width: 597px) {
      #list-header img {
        width: 60%;
      }
    }

    .Mui-selected {
      background-color: #fff;
      color: #0000a7;
      font-weight: 500;
    }

    .Mui-selected:hover {
      background-color: #fff;
    }

    .MuiListItem-root {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 8px;
    }

    .MuiListItem-root:last-child {
      margin-top: auto;
    }
  }
`;
