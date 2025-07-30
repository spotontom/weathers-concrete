import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 2rem 1rem;
  text-align: center;
  background: transparent;
  color: #222;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #b30000;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 1.5rem;
    max-width: 600px;
    margin-inline: auto;
  }

  .quote-btn {
    display: inline-block;
    background: #b30000;
    color: #fff;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s ease;

    &:hover {
      background: #a00000;
    }
  }

  @media (min-width: 768px) {
    padding: 3.5rem 2rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .quote-btn {
      padding: 0.75rem 1.5rem;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;