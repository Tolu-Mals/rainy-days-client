import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)`
  /* min-height: 100px; */
  display: flex;
  /* align-items: top; */
  padding: 0.7rem;
  flex-direction: column;

  .MuiButton-root {
      width: 100px;
      margin-top:  auto;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .savings-count {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 600px) {
    width: 33%;
  }
`;
