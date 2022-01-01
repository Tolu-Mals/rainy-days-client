import styled from "styled-components";

export const Layout = styled.div`
  && {
    #stats {
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    .space {
      height: 2rem;
    }

    .appbar {
      background: transparent;
      margin-right: auto;
      color: #000;
    }

    @media screen and (min-width: 900px) {
      display: flex;

      .mainApp {
        width: calc(100% - 250px);
      }
      .appbar {
        width: calc(100% - 250px);
      }

      .space {
        height: 5rem;
      }
    }
  }
`;
