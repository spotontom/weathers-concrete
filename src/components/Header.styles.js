import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #1e3a8a;
  color: white;
  padding: 1rem 2rem;

  .content {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .text {
    display: flex;
    flex-direction: column;
  }

  .text h1 {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 700;
  }

  .text p {
    font-size: 0.9rem;
    margin: 0.25rem 0 0;
  }
`;