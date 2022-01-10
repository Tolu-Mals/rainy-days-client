import styled from "styled-components";

export const TabContainer = styled.div`
  && {
    .MuiAppBar-root {
      background: transparent;
      box-shadow: none;
    }

    @media screen and (max-width: 340px) {
      .MuiTab-root {
        padding: 0;
      }
    }

    .MuiTabs-root {
      color: #000;
      border-bottom: #3779dc;
    }

    .MuiTab-root,
    .MuiTabs-root {
      text-transform: capitalize;
      font-size: 1rem;
    }

    .Mui-selected {
      color: #3779dc;
    }

    .MuiTabs-indicator {
      background-color: #3779dc;
    }
  }
`;
