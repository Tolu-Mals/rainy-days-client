import styled from 'styled-components';

export const Layout = styled.div`
  && {

    .space {
        height: 1.5rem;
    }

      .appbar {
          background: transparent;
          margin-right: auto;
          color: #000;
      }

      @media screen and (min-width: 900px){
          .appbar {
              width: calc(100% - 272px);
          }
      }
  }
`;