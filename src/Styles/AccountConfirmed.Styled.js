import styled from "styled-components";

export const StyledAccountConfirmation = styled.div`
  #confirmation-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    #construction_icon {
      width: 70%;
      margin: 0 auto;

    }
  }
  #check_icon {
    margin-bottom: 1rem;
    width: 88px;
    height: 88px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    display: block;
    width: 132px;
    margin: 0 auto;
  }
`;
